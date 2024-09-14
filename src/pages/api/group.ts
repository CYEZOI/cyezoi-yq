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
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const groupIdList = req.query.groupIdList;

    var groupId: Array<number> = [];
    if (typeof groupIdList === "string") {
      for (const _ of groupIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        groupId.push(parseInt(_));
      }
    }
    var groupData: Array<{
      groupId: number,
      groupName: string,
    }> = [];
    await groupModule.findAll({
      ...groupId.length > 0 && {
        where: {
          groupId: groupId,
        },
      },
    }).then(records => {
      for (const _ of records) {
        groupData.push({
          groupId: _.getDataValue("groupId"),
          groupName: _.getDataValue("groupName"),
        });
      }
    });
    API.success(res, i18n.t("groupGetSuccess"), { group: groupData });
  } else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
