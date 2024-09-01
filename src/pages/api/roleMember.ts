import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { roleMemberModule } from "@/database";
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
          API.failure(res, "Invalid student");
          return;
        }
        studentIdList.push(studentIdNumber);
      }
    }
    var studentData: Array<{
      studentId: number,
      role: Array<number>,
    }> = [];
    await roleMemberModule.findAll({
      ...studentIdList.length > 0 && {
        where: {
          student: studentIdList,
        },
      },
    }).then(records => {
      for (const record of records) {
        studentData.push({
          studentId: record.getDataValue("student"),
          role: [record.getDataValue("role")],
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, "", { student: studentData });
  }
  else if (req.method == "POST") {
    const student = req.body.params.student;
    const role = req.body.params.role;
    const leader = req.body.params.leader;
    if (typeof student != "number" || typeof role != "number" || typeof leader != "boolean") {
      API.failure(res, "Invalid parameters");
      return;
    }
    await roleMemberModule.create({
      student,
      role,
      leader,
    }).then(() => {
      API.success(res);
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "DELETE") {
    const student = req.body.params.student;
    const role = req.body.params.role;
    if (typeof student != "number" || typeof role != "number") {
      API.failure(res, "Invalid parameters");
      return;
    }
    await roleMemberModule.destroy({
      where: {
        student,
        role,
      },
    }).then(() => {
      API.success(res);
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else {
    API.failure(res, "Invalid method");
  }
}
