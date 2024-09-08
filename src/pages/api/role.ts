import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { roleModule } from "@/database";
import i18n from "@/i18n";
import { utilities } from "@/utilities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    const roleIdList = req.query.roleIdList;
    if (typeof roleIdList !== "string") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    var roleId: Array<number> = [];
    for (const _ of roleIdList.split(",")) {
      if (!utilities.isValidNumber(_)) {
        API.failure(res, i18n.t("invalidParameter")); return;
      }
      roleId.push(parseInt(_));
    }
    var roleData: Array<{
      roleId: number,
      roleName: string,
    }> = [];
    await roleModule.findAll({
      ...roleId.length > 0 && {
        where: {
          roleId,
        },
      },
    }).then(records => {
      for (const record of records) {
        roleData.push({
          roleId: record.getDataValue("roleId"),
          roleName: record.getDataValue("roleName"),
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("roleGetSuccess"), { role: roleData });
  } else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
