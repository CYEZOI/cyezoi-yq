import type { AppProps } from "next/app";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Translate } from "react-bootstrap-icons";
import i18n from "@/i18n";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");
  i18n.changeLanguage(language);
  const { t } = i18n;
  const handleLanguage = (language: string) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  useEffect(() => {
    typeof document !== undefined &&
      // import("react-bootstrap/dist/react-bootstrap");
      handleLanguage(localStorage.getItem("language") || "en");
  });

  return <>
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand>
          {/* <img src="/CYEZOI.png" width="30" height="30" className="d-inline-block align-top" /> */}
          {t("brand")}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">{t("home")}</Nav.Link>
            <Nav.Link href="/student">{t("student")}</Nav.Link>
            <Nav.Link href="/privilegeRecord">{t("privilegeRecord")}</Nav.Link>
            <Nav.Link href="/finance">{t("finance")}</Nav.Link>
          </Nav>
          <NavDropdown title={<span><Translate className="me-2" />{t("language")}</span>}>
            <NavDropdown.Item onClick={() => { handleLanguage("en"); }}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { handleLanguage("zh"); }}>中文</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar >
    <Container>
      <Component {...pageProps} classList="mt-2" />
      <div className="mt-3">
        <center>{t("footer")}</center>
      </div>
    </Container>
  </>;
}
