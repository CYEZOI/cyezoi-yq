import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { financeModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized")); return;
    }

    const response: { records: Array<{ month: string, income: number, expenditure: number, balance: number }> } = { records: [] };
    await financeModule.findAll().then((records) => {
      let income: number = 0;
      let expenditure: number = 0;
      let balance: number = 0;
      let month: string = "";
      for (let record of records) {
        const currentMonth: string = record.getDataValue("date").toString().slice(0, 7);
        if (month == "") {
          month = currentMonth;
        }
        if (month != currentMonth) {
          response.records.push({ month, income, expenditure, balance });
          month = currentMonth, income = 0, expenditure = 0;
        }
        if (record.getDataValue("money") > 0) {
          income += record.getDataValue("money");
        }
        else {
          expenditure += record.getDataValue("money");
        }
        balance += record.getDataValue("money");
      }
      response.records.push({ month, income, expenditure, balance });
      API.success(res, i18n.t("financeStaticsGetSuccess"), response);
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
