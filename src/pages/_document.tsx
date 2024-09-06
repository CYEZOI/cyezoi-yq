import { Html, Head, Main, NextScript } from "next/document";
import i18n from "@/i18n";

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
