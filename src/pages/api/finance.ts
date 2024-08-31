import { API, APIRequest, APIResponse } from "@/pages/_api";
import type { NextApiRequest, NextApiResponse } from "next";
import { financeModule } from "./_database";
import i18n from "../_i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    await financeModule.findAll().then((records) => {
      API.success(res, "", { records: records });
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    await financeModule.create({
      money: request.params.money,
      detail: request.params.detail,
    }).then(() => {
      API.success(res);
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "DELETE") {
    const request: URLSearchParams = new URLSearchParams(new URL(req.url!, "http://localhost").search);
    await financeModule.destroy({
      where: {
        id: request.get("id"),
      },
    }).then(() => {
      API.success(res);
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else if (req.method == "PUT") {
    const request: APIRequest = req.body;
    await financeModule.update({
      money: request.params.money,
      detail: request.params.detail,
    }, {
      where: {
        id: request.params.id,
      },
    }).then(() => {
      API.success(res);
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
  }
  else {
    API.failure(res, "Invalid method");
  }
}
