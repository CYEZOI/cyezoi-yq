import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { roleMemberModule } from "@/database";
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
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const studentIdList = req.query.studentIdList;
    const roleIdList = req.query.roleIdList;

    var student: Array<number> = [];
    var role: Array<number> = [];
    if (typeof studentIdList === "string") {
      for (const _ of studentIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        student.push(parseInt(_));
      }
    }
    if (typeof roleIdList === "string") {
      for (const _ of roleIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        role.push(parseInt(_));
      }
    }

    var studentData: Array<{
      studentId: number,
      role: Array<{
        roleId: number,
      }>,
    }> = [];
    var whereObject: any = {};
    if (student.length > 0) whereObject.student = student;
    if (role.length > 0) whereObject.role = role;
    await roleMemberModule.findAll({
      where: whereObject,
    }).then(records => {
      for (const _ of records) {
        studentData.push({
          studentId: _.getDataValue("student"),
          role: [{
            roleId: _.getDataValue("role"),
          }],
        });
      }
    });
    API.success(res, i18n.t("roleMemberGetSuccess"), { student: studentData });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    if (await token.checkToken(request.token as string) == null) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const student = request.params.student;
    const role = request.params.role;
    const leader = request.params.leader;
    if (typeof student !== "number" || typeof role !== "number" || typeof leader !== "number") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await roleMemberModule.create({
      student,
      role,
      leader,
    }).then(() => {
      API.success(res, i18n.t("roleMemberCreateSuccess"));
    });
  }
  else if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const student = req.body.params.student;
    const role = req.body.params.role;
    if (typeof student !== "string" || !utilities.isValidNumber(student) || typeof role !== "string" || !utilities.isValidNumber(role)) {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await roleMemberModule.destroy({
      where: {
        student,
        role,
      },
    }).then(() => {
      API.success(res, i18n.t("roleMemberDeleteSuccess"));
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
