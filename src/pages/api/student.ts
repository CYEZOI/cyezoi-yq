import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { studentModule } from "@/database";
import i18n from "@/i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    var studentIdList: Array<number> = [];
    if (req.query.studentIdList && typeof req.query.studentIdList == "string") {
      for (const studentId of req.query.studentIdList.split(",")) {
        const studentIdNumber = parseInt(studentId);
        if (isNaN(studentIdNumber) || studentIdNumber < 0 || studentIdNumber == Infinity) {
          API.failure(res, "Invalid studentIdList");
          return;
        }
        studentIdList.push(studentIdNumber);
      }
    }
    var student: Array<{
      studentId: number,
      studentName: string,
      gender: boolean,
    }> = [];
    await studentModule.findAll({
      ...studentIdList.length > 0 && {
        where: {
          studentId: studentIdList,
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
    API.success(res, "", { student });
  }
  else {
    API.failure(res, "Invalid method");
  }
}
