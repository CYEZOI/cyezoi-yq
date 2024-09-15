import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import i18n from "@/i18n";
import { token } from "@/token";
import { permission } from "@/permission";
import { imageModule } from "@/database";
import { utilities } from "@/utilities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse | Buffer>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    const imageId = req.query.imageId;
    if (typeof imageId === "string") {
      await imageModule.findOne({
        where: {
          imageId,
        },
      }).then((record) => {
        if (record) {
          const image: string = record.getDataValue("image");
          res.setHeader("Content-Type", image.substring(image.indexOf(":") + 1, image.indexOf(";")));
          res.send(Buffer.from(image.substring(image.indexOf(",") + 1), "base64"));
          res.end();
        }
        else {
          API.failure(res, i18n.t("imageNotFound"));
        }
      });
    }
    else {
      const userId: number = await token.checkToken(req.query.token as string) || -1;
      if (userId === -1) {
        API.failure(res, i18n.t("unauthorized")); return;
      }

      await imageModule.findAll({
        where: {
          ...((await permission.getPermission(userId)).checkPermission(permission.PERMISSION_LIST_ALL_IMAGE) ? {} : { userId }),
        },
      }).then((records) => {
        API.success(res, i18n.t("imageGetSuccess"), { records: records });
      });
    }
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    const userId: number = await token.checkToken(request.token as string) || -1;
    if (userId === -1) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    if ((await permission.getPermission(userId)).checkPermission(permission.PERMISSION_UPLOAD_IMAGE) == false) {
      API.failure(res, i18n.t("permissionDenied"));
      return;
    }
    const image = request.params.image;
    if (image == null) {
      API.failure(res, i18n.t("invalidParameter"));
      return;
    }
    const imageId: string = utilities.generateRandomString();
    await imageModule.create({
      imageId,
      userId,
      image,
    }).then(() => {
      API.success(res, i18n.t("imageUploadSuccess"), { imageId });
    });
  }
  else if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    const userId: number = await token.checkToken(req.query.token as string) || -1;
    if (userId === -1) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const imageId = req.query.imageId;
    if (typeof imageId !== "string") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }
    const uploadUserId = await imageModule.findOne({
      where: {
        imageId,
      },
    }).then(image => {
      if (image) {
        return image.getDataValue("userId");
      }
      return -1;
    });
    if (uploadUserId !== userId && (await permission.getPermission(userId)).checkPermission(permission.PERMISSION_UPLOAD_IMAGE) == false) {
      API.failure(res, i18n.t("permissionDenied"));
      return;
    }

    await imageModule.destroy({
      where: {
        imageId,
      },
    }).then(() => {
      API.success(res, i18n.t("imageDeleteSuccess"));
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}