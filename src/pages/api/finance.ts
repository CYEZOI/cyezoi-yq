import { API, APIRequest, APIResponse } from "@/api";
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
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    await financeModule.findAll().then((records) => {
      API.success(res, i18n.t("financeGetSuccess"), { records: records });
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    await financeModule.create({
      money: request.params.money,
      detail: request.params.detail,
    }).then(() => {
      API.success(res, i18n.t("financeCreateSuccess"));
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    const request: any = req.query;
    await financeModule.destroy({
      where: {
        financeId: request.get("financeId"),
      },
    }).then(() => {
      API.success(res, i18n.t("financeDeleteSuccess"));
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "PUT") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    await financeModule.update({
      money: request.params.money,
      detail: request.params.detail,
    }, {
      where: {
        financeId: request.params.financeId,
      },
    }).then(() => {
      API.success(res), i18n.t("financeUpdateSuccess");
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
