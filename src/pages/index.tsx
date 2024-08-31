import React from "react";
import i18n from "./_i18n";
import Head from "next/head";

export default function error() {
  const { t } = i18n;

  return (
    <>
      <Head>
        <title>{t("home") + " - " + t("brand")}</title>
      </Head>
      <div>
        <h3>{t("home")}</h3>
        <p>{t("welcomeDescription")}</p>
      </div>
    </>
  );
}