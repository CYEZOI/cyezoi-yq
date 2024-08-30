import { Html, Head, Main, NextScript } from "next/document";
import i18n from "./_i18n";
import { useState } from "react";

export default function Document() {
  const { t } = i18n;
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html >
  );
}
