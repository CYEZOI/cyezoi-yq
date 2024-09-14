import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Alert } from "react-bootstrap";

export default function error500() {
  const { t } = i18n;

  return (
    <>
      <Head>
        <title>{t("500") + " - " + t("brand")}</title>
      </Head>
      <div>
        <Alert variant="danger">
          <Alert.Heading>{t("500")}</Alert.Heading>
          <p>{t("500Description")}</p>
        </Alert>
      </div>
    </>
  );
}