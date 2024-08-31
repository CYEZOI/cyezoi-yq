import { API, APIResponse } from "@/pages/_api";
import type { NextApiRequest, NextApiResponse } from "next";
import { groupModule, privilegeRecordModule, roleModule, studentModule } from "./_database";
import i18n from "../_i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    const response = {
      student: [],
      group: [],
      role: [],
      privilegeRecord: [],
    }
    await studentModule.findAll().then((records) => {
      response.student = records;
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    await groupModule.findAll().then((records) => {
      response.group = records;
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    await roleModule.findAll().then((records) => {
      response.role = records;
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    await privilegeRecordModule.findAll().then((records) => {
      response.privilegeRecord = records;
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, "", response);
  }
  else {
    API.failure(res, "Invalid method");
  }
}
