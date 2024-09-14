import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import i18n from "@/i18n";
import { token } from "@/token";
import { permission } from "@/permission";
import { utilities } from "@/utilities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    const userId: number = await token.checkToken(req.query.token as string) || -1;

    const userIdQuery = req.query.userId;
    if (typeof userIdQuery !== "string" || !utilities.isValidNumber(userIdQuery)) {
      API.failure(res, i18n.t("invalidParameter")); return;
    }
    if (userId !== parseInt(userIdQuery) && (await permission.getPermission(userId)).checkPermission(permission.PERMISSION_LOGOUT_OTHER) == false) {
      API.failure(res, i18n.t("permissionDenied")); return;
    }
    await token.deleteToken(parseInt(userIdQuery));
    API.success(res, i18n.t("logoutSuccess"));
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}