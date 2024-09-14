import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { privilegeRecordModule } from "@/database";
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
    const page = req.query.page;
    if (typeof page !== "string") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    if (!utilities.isValidNumber(page)) {
      API.failure(res, i18n.t("invalidParameter")); return;
    }
    var offset: number = (parseInt(page) - 1) * 10;
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
      offset,
    }).then(records => {
      for (const _ of records) {
        privilegeRecord.push({
          privilegeRecordId: _.getDataValue("privilegeRecordId"),
          date: _.getDataValue("date"),
          student: _.getDataValue("student"),
          io: _.getDataValue("io"),
          type: _.getDataValue("type"),
          value: _.getDataValue("value"),
          reason: _.getDataValue("reason"),
        });
      }
    });
    var privilegeRecordSize: number = 0;
    await privilegeRecordModule.count().then(size => {
      privilegeRecordSize = size;
    });
    API.success(res, i18n.t("privilegeRecordGetSuccess"), { privilegeRecord, privilegeRecordSize });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
