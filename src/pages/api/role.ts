import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { roleModule } from "@/database";
import i18n from "@/i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    var roleIdList: Array<number> = [];
    if (req.query.roleId && typeof req.query.roleId == "string") {
      for (const roleId of req.query.roleId.split(",")) {
        const roleIdNumber = parseInt(roleId);
        if (isNaN(roleIdNumber) || roleIdNumber < 0 || roleIdNumber == Infinity) {
          API.failure(res, "Invalid role");
          return;
        }
        roleIdList.push(roleIdNumber);
      }
    }
    var roleData: Array<{
      roleId: number,
      roleName: string,
    }> = [];
    await roleModule.findAll({
      ...roleIdList.length > 0 && {
        where: {
          roleId: roleIdList,
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
