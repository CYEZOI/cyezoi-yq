import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { groupMemberModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";

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

    var studentIdList: Array<number> = [];
    var groupIdList: Array<number> = [];
    if (req.query.studentIdList && typeof req.query.studentIdList == "string") {
      for (const studentId of req.query.studentIdList.split(",")) {
        const studentIdNumber = parseInt(studentId);
        if (isNaN(studentIdNumber) || studentIdNumber < 0 || studentIdNumber == Infinity) {
          API.failure(res, "Invalid student");
          return;
        }
        studentIdList.push(studentIdNumber);
      }
    }
    if (req.query.groupIdList && typeof req.query.groupIdList == "string") {
      for (const groupId of req.query.groupIdList.split(",")) {
        const groupIdNumber = parseInt(groupId);
        if (isNaN(groupIdNumber) || groupIdNumber < 0 || groupIdNumber == Infinity) {
          API.failure(res, "Invalid group");
          return;
        }
        groupIdList.push(groupIdNumber);
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
    if (studentIdList.length > 0) whereObject.student = studentIdList;
    if (groupIdList.length > 0) whereObject.group = groupIdList;
    await groupMemberModule.findAll({
      where: whereObject,
    }).then(records => {
      for (const record of records) {
        studentData.push({
          studentId: record.getDataValue("student"),
          group: [{
            groupId: record.getDataValue("group"),
            leader: record.getDataValue("leader"),
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
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    const student = request.params.student;
    const group = request.params.group;
    const leader = request.params.leader;
    if (typeof student != "number" || typeof group != "number" || typeof leader != "boolean") {
      API.failure(res, "Invalid parameters");
      return;
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
