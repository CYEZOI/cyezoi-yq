import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { studentModule, userModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";
import { utilities } from "@/utilities";
import { permission } from "@/permission";

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

    let studentId: Array<number> = [];
    if (typeof studentIdList == "string") {
      for (const _ of studentIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        studentId.push(parseInt(_));
      }
    }
    var student: Array<{
      studentId: number,
      studentName: string,
      gender: boolean,
      psychologicalGender: string,
    }> = [];
    await studentModule.findAll({
      ...studentId.length > 0 && {
        where: {
          studentId,
        },
      },
    }).then(records => {
      for (const record of records) {
        student.push({
          studentId: record.getDataValue("studentId"),
          studentName: record.getDataValue("studentName"),
          gender: record.getDataValue("gender"),
          psychologicalGender: record.getDataValue("psychologicalGender"),
        });
      }
    });
    API.success(res, i18n.t("studentGetSuccess"), { student: student });
  }
  else if (req.method == "PUT") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    const userId: number = await token.checkToken(request.token as string) || -1;
    let studentId: number | null = null;
    if (userId === -1) {
      API.failure(res, i18n.t("unauthorized")); return;
    } else {
      await userModule.findOne({
        where: {
          userId,
        },
      }).then(user => {
        if (!user) {
          API.failure(res, i18n.t("userNotFound"));
          return;
        }
        studentId = user.getDataValue("studentId");
      });
    }

    const studentIdQuery = request.params.studentId;
    const studentName = request.params.studentName;
    const gender = request.params.gender;
    const psychologicalGender = request.params.psychologicalGender;
    if (typeof studentIdQuery === "number" && typeof psychologicalGender === "string") {
      if (studentId !== studentIdQuery && (await (permission.getPermission(userId))).checkPermission(permission.PERMISSION_UPDATE_OTHER_INFO) == false) {
        API.failure(res, i18n.t("permissionDenied")); return;
      }
      await studentModule.update({
        psychologicalGender,
      }, {
        where: {
          studentId: studentIdQuery,
        },
      }).then(() => {
        API.success(res, i18n.t("studentUpdateSuccess"));
      });
    }
    else if (typeof studentIdQuery === "number" && typeof studentName === "string" && typeof gender === "boolean") {
      if ((await (permission.getPermission(userId))).checkPermission(permission.PERMISSION_UPDATE_STUDENT_BASIC_INFO) == false) {
        API.failure(res, i18n.t("permissionDenied")); return;
      }
      await studentModule.update({
        studentName,
        gender,
      }, {
        where: {
          studentId: studentIdQuery,
        },
      }).then(() => {
        API.success(res, i18n.t("studentUpdateSuccess"));
      });
    }
    else
      API.failure(res, i18n.t("invalidParameter")); return;
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
