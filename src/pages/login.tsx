import Head from "next/head";
import t18n from "@/i18n";
import { Formik } from "formik";
import * as yup from "yup";
import { API } from "@/api";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { pipeInstance } from "@/pipe";
import { useEffect, useState } from "react";

export default function login() {
  const { t } = t18n;

  const [defaultUsername, setDefaultUsername] = useState<string>("");
  const [defaultPassword, setDefaultPassword] = useState<string>("");

  useEffect(() => {
    if (typeof location !== "undefined") {
      const searchParams = new URLSearchParams(location.search);
      setDefaultUsername(searchParams.get("username") || "");
      setDefaultPassword(searchParams.get("password") || "");
    }
  });

  return (
    <>
      <Head>
        <title>{t("login") + " - " + t("brand")}</title>
      </Head>
      <h3>{t("login")}</h3>
      <Formik
        validationSchema={yup.object().shape({
          username: yup.string().typeError(t("requireString")).required(t("required")).min(4, t("minLen4")).max(16, t("maxLen16")),
          password: yup.string().typeError(t("requireString")).required(t("required")).min(8, t("minLen8")).max(64, t("maxLen64")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]).{8,64}$/, t("requireStrongPassword")),
        })}
        onSubmit={(params: object) => {
          const values = params as { username: string, password: string };
          API.Get("login", values, {
            success: (response: any) => {
              const userId = response.userId;
              const token = response.token;
              localStorage.setItem("userId", userId);
              localStorage.setItem("token", token);
              API.Get("user", { userIdList: userId }, {
                success: (response: any) => {
                  const studentId = response.user[0].studentId;
                  localStorage.setItem("studentId", studentId);
                  API.Get("student", { studentIdList: studentId }, {
                    success: (response: any) => {
                      const studentName = response.student[0].studentName;
                      localStorage.setItem("studentName", studentName);
                      location.href = "/";
                    },
                  });
                },
              });
            },
          });
        }} initialValues={{ username: defaultUsername, password: defaultPassword, }} enableReinitialize={true}>
        {(props) => {
          const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
          const valuesProvider = values as { username: string, password: string };
          const touchedProvider = touched as { username: boolean, password: boolean };
          const errorsProvider = errors as { username: string, password: string };
          return <Form noValidate onSubmit={handleSubmit}>
            <FloatingLabel controlId="username" label={t("username")} className="mb-3">
              <Form.Control type="text" placeholder={t("username")} name="username" value={valuesProvider["username"]} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.username && errorsProvider.username != null} />
              <Form.Control.Feedback type="invalid">{errorsProvider.username}</Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="password" label={t("password")} className="mb-3">
              <Form.Control type="password" placeholder={t("password")} name="password" value={valuesProvider["password"]} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.password && errorsProvider.password != null} />
              <Form.Control.Feedback type="invalid">{errorsProvider.password}</Form.Control.Feedback>
            </FloatingLabel>
            <Button type="submit">{t("login")}</Button>
          </Form>;
        }}
      </Formik >
    </>
  );
}