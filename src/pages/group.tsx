import React from "react";
import i18n from "@/i18n";
import Head from "next/head";

export default function group() {
  const { t } = i18n;

  return (
    <>
      <Head>
        <title>{t("group") + " - " + t("brand")}</title>
      </Head>
      <div>
        <h3>{t("group")}</h3>
      </div>
    </>
  );
}