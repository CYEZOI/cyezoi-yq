import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { privilegeRecordModule } from "@/database";
import i18n from "@/i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    var page: number = 1;
    if (req.query.page && typeof req.query.page == "string") {
      const pageNumber = parseInt(req.query.page);
      if (isNaN(pageNumber) || pageNumber < 1 || pageNumber == Infinity) {
        API.failure(res, "Invalid page");
        return;
      }
      page = pageNumber;
    }
    var privilegeRecord: Array<{
      privilegeRecordId: number,
      date: string,
      student: number,
      io: boolean,
      type: string,
      value: number,
      reason: string,
    }> = [];
    await privilegeRecordModule.findAll({
      limit: 10,
      offset: (page - 1) * 10,
    }).then(records => {
      for (const record of records) {
        privilegeRecord.push({
          privilegeRecordId: record.getDataValue("privilegeRecordId"),
          date: record.getDataValue("date"),
          student: record.getDataValue("student"),
          io: record.getDataValue("io"),
          type: record.getDataValue("type"),
          value: record.getDataValue("value"),
          reason: record.getDataValue("reason"),
        });
      }
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    var privilegeRecordSize: number = 0;
    await privilegeRecordModule.count().then(size => {
      privilegeRecordSize = size;
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("privilegeRecordGetSuccess"), { privilegeRecord, privilegeRecordSize });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
