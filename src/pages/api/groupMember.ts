import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { groupMemberModule } from "@/database";
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
      group: Array<{
        groupId: number,
        leader: boolean,
      }>,
    }> = [];
    await groupMemberModule.findAll({
      ...studentIdList.length > 0 && {
        where: {
          student: studentIdList,
        },
      },
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
    API.success(res, "", { student: studentData });
  }
  else if (req.method == "POST") {
    const student = req.body.params.student;
    const group = req.body.params.group;
    const leader = req.body.params.leader;
    if (typeof student != "number" || typeof group != "number" || typeof leader != "boolean") {
      API.failure(res, "Invalid parameters");
      return;
    }
    await groupMemberModule.create({
      student,
      group,
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
    const group = req.body.params.group;
    if (typeof student != "number" || typeof group != "number") {
      API.failure(res, "Invalid parameters");
      return;
    }
    await groupMemberModule.destroy({
      where: {
        student,
        group,
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
