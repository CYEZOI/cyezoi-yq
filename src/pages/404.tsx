import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Alert } from "react-bootstrap";

export default function error() {
  const { t } = i18n;

  return (
    <>
      <Head>
        <title>{t("404") + " - " + t("brand")}</title>
      </Head>
      <div>
        <Alert variant="danger">
          <Alert.Heading>{t("404")}</Alert.Heading>
          <p>{t("404Description")}</p>
        </Alert>
      </div>
    </>
  );
}