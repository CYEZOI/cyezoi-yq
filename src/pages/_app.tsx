import type { AppProps } from "next/app";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import i18n from "./_i18n";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  const [language, setLanguage] = useState("en");
  i18n.changeLanguage(language);
  const { t } = i18n;

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
            <Nav.Link href="/index">{t("home")}</Nav.Link>
            <Nav.Link href="/finance">{t("finance")}</Nav.Link>
          </Nav>
          <NavDropdown title={<span><Icon.Translate className="me-2" />{t("language")}</span>}>
            <NavDropdown.Item onClick={() => { i18n.changeLanguage("en"); setLanguage("en"); }}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { i18n.changeLanguage("zh"); setLanguage("zh"); }}>中文</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar >
    <Container>
      <Component {...pageProps} classList="mt-2" />
      <div><center>{t("footer")}</center></div>
    </Container>
  </>;
}
