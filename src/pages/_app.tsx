import type { AppProps } from "next/app";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Book, BoxArrowRight, BoxArrowUpRight, CashCoin, HouseDoor, Moon, PencilSquare, People, Person, PersonBadge, PersonVcard, PersonWorkspace, Sun, Toggles, Translate } from "react-bootstrap-icons";
import i18n from "@/i18n";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Alert, Container, Stack } from "react-bootstrap";
import { pipeInstance } from "@/pipe";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<string>("en");
  const [userId, setUserId] = useState<string>("");
  const [studentName, setStudentName] = useState<string>("");
  const [alertList, setAlertList] = useState<{ message: string, variant: string }[]>([]);
  const [mode, setMode] = useState<string>("light");
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

  useEffect(() => {
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
  </>;
}
