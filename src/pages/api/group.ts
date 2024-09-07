import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { groupModule } from "@/database";
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

    var groupIdList: Array<number> = [];
    if (req.query.groupId && typeof req.query.groupId == "string") {
      for (const groupId of req.query.groupId.split(",")) {
        const groupIdNumber = parseInt(groupId);
        if (isNaN(groupIdNumber) || groupIdNumber < 0 || groupIdNumber == Infinity) {
          API.failure(res, "Invalid group");
          return;
        }
        groupIdList.push(groupIdNumber);
      }
    }
    var groupData: Array<{
      groupId: number,
      groupName: string,
    }> = [];
    await groupModule.findAll({
      ...groupIdList.length > 0 && {
        where: {
          groupId: groupIdList,
        },
      },
    }).then(records => {
      for (const record of records) {
        groupData.push({
          groupId: record.getDataValue("groupId"),
          groupName: record.getDataValue("groupName"),
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("groupGetSuccess"), { group: groupData });
  } else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
