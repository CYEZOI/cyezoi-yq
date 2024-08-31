import React from "react";
import i18n from "./_i18n";
import Head from "next/head";
import { Card } from "react-bootstrap";
import useSWR from "swr";
import { API } from "./_api";

export default function error() {
  const { t } = i18n;
  const { data, error } = useSWR("privilegeRecord", API.Get);
  if (error) {
    // handle error
  }

  var newData = {
    "student": [],
    "group": {},
    "role": {},
    "privilegeRecord": [],
  };
  if (data) {
    for (let student in data["student"]) {
      newData["student"][data["student"][student]["id"]] = data["student"][student]["name"];
    }
    for (let group in data["group"]) {
      newData["group"][data["group"][group]["id"]] = data["group"][group]["name"];
    }
    for (let role in data["role"]) {
      newData.role[data["role"][role]["id"]] = data["role"][role]["name"];
    }
    newData.privilegeRecord = data["privilegeRecord"];
  }

  return (<>
    <Head>
      <title>{t("privilegeRecord") + " - " + t("brand")}</title>
    </Head>
    <div>
      <h3>{t("privilegeRecord")}</h3>
      {newData.privilegeRecord.map((record: any) => (
        <Card key={record.id} className="mb-2">
          <Card.Body>
            <Card.Title>{newData.student[record.student]}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{record.date}</Card.Subtitle>
            <Card.Text>{record.io ? t("gain") : t("lose")}{t(record.type)}{t("colon")}{(record.type == "role" ? newData.role : newData.group)[record.value]}{t("comma")}{t("reason")}{t("colon")}{record.reason}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  </>
  );
}