import Head from "next/head";
import t18n from "@/i18n";
import { Formik } from "formik";
import * as yup from "yup";
import { API } from "@/api";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function password() {
  const { t } = t18n;
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (typeof location !== "undefined") {
      const searchParams = new URLSearchParams(location.search);
      setUsername(searchParams.get("username") || "");
    }
  });

  return (
    <>
      <Head>
        <title>{t("password") + " - " + t("brand")}</title>
      </Head>
      <h3>{t("password")}</h3>
      <Formik
        validationSchema={yup.object().shape({
          username: yup.string().typeError(t("requireString")).required(t("required")),
          password: yup.string().typeError(t("requireString")).required(t("required")).min(8, t("minLen8")).max(64, t("maxLen64")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]).{8,64}$/, t("requireStrongPassword")),
          confirmPassword: yup.string().typeError(t("requireString")).required(t("required"))
        })}
        onSubmit={(params: object) => {
          const values = params as { username: string, password: string };
          API.Put("user", {
            params: values,
          }, {
            success: () => {
              history.back();
            }, showSuccess: true,
          });
        }} initialValues={{ username, password: "", confirmPassword: "" }} enableReinitialize={true}>
        {(props) => {
          const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
          const valuesProvider = values as { username: string, password: string, confirmPassword: string };
          const touchedProvider = touched as { username: boolean, password: boolean, confirmPassword: boolean };
          const errorsProvider = errors as { username: string, password: string, confirmPassword: string };
          return <Form noValidate onSubmit={handleSubmit}>
            <FloatingLabel controlId="username" label={t("username")} className="mb-3">
              <Form.Control placeholder={t("username")} name="username" value={valuesProvider.username} disabled onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.username && errorsProvider.username != null} />
              <Form.Control.Feedback type="invalid">{errorsProvider.username}</Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="password" label={t("password")} className="mb-3">
              <Form.Control type="password" placeholder={t("password")} name="password" value={valuesProvider.password} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.password && errorsProvider.password != null} />
              <Form.Control.Feedback type="invalid">{errorsProvider.password}</Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="confirmPassword" label={t("confirmPassword")} className="mb-3">
              <Form.Control type="password" placeholder={t("confirmPassword")} name="confirmPassword" value={valuesProvider.confirmPassword} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.confirmPassword && errorsProvider.confirmPassword != null} />
              <Form.Control.Feedback type="invalid">{errorsProvider.confirmPassword}</Form.Control.Feedback>
            </FloatingLabel>
            <Button type="submit">{t("update")}</Button>
          </Form>;
        }}
      </Formik >
    </>
  );
}