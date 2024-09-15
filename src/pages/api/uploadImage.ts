import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import i18n from "@/i18n";
import { token } from "@/token";
import { permission } from "@/permission";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "POST") {
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
    const image = request.params.image;
  }
}