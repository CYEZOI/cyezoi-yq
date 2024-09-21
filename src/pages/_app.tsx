import type { AppProps } from "next/app";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Book, BoxArrowRight, BoxArrowUpRight, CashCoin, HouseDoor, Image, Moon, PencilSquare, People, Person, PersonBadge, PersonVcard, PersonWorkspace, Sun, Toggles, Translate } from "react-bootstrap-icons";
import i18n from "@/i18n";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Alert, Container, Stack } from "react-bootstrap";
import { pipeInstance } from "@/pipe";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = React.useState<string>("en");
  const [userId, setUserId] = React.useState<string>("");
  const [studentName, setStudentName] = React.useState<string>("");
  const [alertList, setAlertList] = React.useState<{ message: string, variant: string }[]>([]);
  const [mode, setMode] = React.useState<string>("light");
  i18n.changeLanguage(language);
  const { t } = i18n;
  const handleMode = (mode: string) => {
    localStorage.setItem("mode", mode);
    document.body.setAttribute("data-bs-theme", mode);
    setMode(mode);
  }
  const handleLanguage = (language: string) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  React.useEffect(() => {
    typeof localStorage !== "undefined" && handleMode(localStorage.getItem("mode") || "light");
    typeof document !== "undefined" && handleLanguage(localStorage.getItem("language") || "en");
    typeof localStorage !== "undefined" && setUserId(localStorage.getItem("userId") || "");
    typeof localStorage !== "undefined" && setStudentName(localStorage.getItem("studentName") || "");
    pipeInstance.listen("newAlert", (data: { message: string, variant: string }) => {
      setAlertList((prevAlertList) => {
        const newAlertList = [...prevAlertList.filter(alert => alert.message !== data.message), data];
        setTimeout(() => {
          setAlertList((currentAlertList) => currentAlertList.filter(alert => alert !== data));
        }, 5000);
        return newAlertList;
      });
    });
  }, []);

  return <>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-5691V2HGNT"></script>
      <script>
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-5691V2HGNT');
  `}
      </script>
    </Head>
    <Navbar expand="lg" className="bg-body-tertiary mb-3" >
      <Container>
        <Navbar.Brand>
          {/* <img src="/CYEZOI.png" width="30" height="30" className="d-inline-block align-top" /> */}
          {t("brand")}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/"><HouseDoor className="me-1" />{t("home")}</Nav.Link>
            <NavDropdown title={<span><PersonWorkspace className="me-1" />{t("personal")}</span>} className="me-1">
              <NavDropdown.Item href="/student"><Person className="me-1" />{t("student")}</NavDropdown.Item>
              <NavDropdown.Item href="/group"><People className="me-1" />{t("group")}</NavDropdown.Item>
              <NavDropdown.Item href="/role"><PersonVcard className="me-1" />{t("role")}</NavDropdown.Item>
              <NavDropdown.Item href="/user"><PersonBadge className="me-1" />{t("user")}</NavDropdown.Item>
              <NavDropdown.Item href="/privilegeRecord"><Book className="me-1" />{t("privilegeRecord")}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/finance"><CashCoin className="me-1" />{t("finance")}</Nav.Link>
            <Nav.Link href="/image"><Image className="me-1" />{t("image")}</Nav.Link>
            <Nav.Link href="https://langningchen.sharepoint.com/:f:/g/ErK-j2zEQDRMjhUFSqFC2aIBXnlcLPhx-8-SwIZMJ9hMGg?e=fmeiyC" target="_blank"><BoxArrowUpRight className="me-1" />{t("resource")}</Nav.Link>
          </Nav>
          <Nav >
            <NavDropdown title={<span><Toggles className="me-1" />{t("mode")}</span>} className="me-1">
              <NavDropdown.Item onClick={() => { handleMode("light"); }}><Sun className="me-1" />{t("light")}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { handleMode("dark"); }}><Moon className="me-1" />{t("dark")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span><Translate className="me-1" />{t("language")}</span>} className="me-1">
              <NavDropdown.Item onClick={() => { handleLanguage("en"); }}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { handleLanguage("zh"); }}>中文</NavDropdown.Item>
            </NavDropdown>
            {
              studentName == "" ?
                <Nav.Link href="/login">{t("login")}</Nav.Link> :
                <>
                  <NavDropdown title={studentName}>
                    <NavDropdown.Item href={"/userInfo?userId=" + userId}><PencilSquare className="me-1" />{t("changeInfo")}</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => {
                      localStorage.removeItem("userId");
                      localStorage.removeItem("token");
                      localStorage.removeItem("studentId");
                      localStorage.removeItem("studentName"); setStudentName("");
                    }}><BoxArrowRight className="me-1" />{t("logout")}</NavDropdown.Item>
                  </NavDropdown>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
    <Container>
      <Stack gap={3} className="z-1 position-fixed top-0 end-0 mt-3 me-3 opacity-75">
        {alertList.map((alert, index) => {
          return <Alert key={index} variant={alert.variant} onClose={() => {
            setAlertList(alertList.filter((_, i) => i !== index));
          }} dismissible>{alert.message}</Alert>;
        })}
      </Stack>
      <Component {...pageProps} classList="mt-2" />
      <div className="mt-5">
        <center>
          {t("footer")}
          <Link href="https://github.com/CYEZOI/cyezoi-yq" target="_blank">GitHub</Link>
        </center>
      </div>
    </Container>
    <Script>
      {`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ns5lmumdq2");
    `}
    </Script>
  </>;
}
