import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { financeModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";
import { permission } from "@/permission";
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

    await financeModule.findAll().then((records) => {
      API.success(res, i18n.t("financeGetSuccess"), { records: records });
    });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    const userId: number = await token.checkToken(request.token as string) || -1;
    if (userId === -1) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    if ((await permission.getPermission(userId)).checkPermission(permission.PERMISSION_FINANCE_WRITE) == false) {
      API.failure(res, i18n.t("permissionDenied"));
      return;
    }
    const date = request.params.date;
    const money = request.params.money;
    const detail = request.params.detail;
    if (typeof date !== "string" || typeof money !== "number" || typeof detail !== "string") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await financeModule.create({
      date,
      money,
      detail,
    }).then(() => {
      API.success(res, i18n.t("financeCreateSuccess"));
    });
  }
  else if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const financeId = req.query.financeId;
    if (typeof financeId !== "string" || !utilities.isValidNumber(financeId)) {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await financeModule.destroy({
      where: {
        financeId,
      },
    }).then(() => {
      API.success(res, i18n.t("financeDeleteSuccess"));
    });
  }
  else if (req.method == "PUT") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    if (await token.checkToken(request.token as string) == null) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const money = request.params.money;
    const detail = request.params.detail;
    const financeId = request.params.financeId;
    if (typeof money !== "number" || typeof detail !== "string" || typeof financeId !== "number") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await financeModule.update({
      money,
      detail,
    }, {
      where: {
        financeId,
      },
    }).then(() => {
      API.success(res), i18n.t("financeUpdateSuccess");
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
