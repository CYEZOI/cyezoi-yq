import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { groupMemberModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";
import { utilities } from "@/utilities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }
    const studentIdList = req.query.studentIdList;
    const groupIdList = req.query.groupIdList;

    var student: Array<number> = [];
    var group: Array<number> = [];
    if (typeof studentIdList === "string") {
      for (const _ of studentIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        student.push(parseInt(_));
      }
    }
    if (typeof groupIdList === "string") {
      for (const _ of groupIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        group.push(parseInt(_));
      }
    }
    var studentData: Array<{
      studentId: number,
      group: Array<{
        groupId: number,
        leader: boolean,
      }>,
    }> = [];
    var whereObject: any = {};
    if (student.length > 0) whereObject.student = student;
    if (group.length > 0) whereObject.group = group;
    await groupMemberModule.findAll({
      where: whereObject,
    }).then(records => {
      for (const _ of records) {
        studentData.push({
          studentId: _.getDataValue("student"),
          group: [{
            groupId: _.getDataValue("group"),
            leader: _.getDataValue("leader"),
          }],
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("groupMemberGetSuccess"), { student: studentData });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    if (await token.checkToken(request.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }
    const student = request.params.student;
    const group = request.params.group;
    const leader = request.params.leader;
    if (typeof student !== "number" || typeof group !== "string" || typeof leader !== "number") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await groupMemberModule.create({
      student,
      group,
      leader,
    }).then(() => {
      API.success(res, i18n.t("groupMemberCreateSuccess"));
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
