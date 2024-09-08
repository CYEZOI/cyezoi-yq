import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { studentModule } from "@/database";
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

    var studentId: Array<number> = [];
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
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("studentGetSuccess"), { student: student });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
