import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { groupModule } from "@/database";
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
      API.failure(res, i18n.t("unauthorized"));
      return;
    }
    const groupId = req.query.groupId;

    var groupIdList: Array<number> = [];
    if (typeof groupId === "string") {
      for (const _ of groupId.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        groupIdList.push(parseInt(_));
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
      for (const _ of records) {
        groupData.push({
          groupId: _.getDataValue("groupId"),
          groupName: _.getDataValue("groupName"),
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
