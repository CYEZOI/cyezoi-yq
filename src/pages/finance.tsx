import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import { Formik } from "formik";
import i18n from "./_i18n";
import Head from "next/head";
import { Col, Row } from "react-bootstrap";

export default function login() {
  const { t } = i18n;
  return (
    <>
      <Head>
        <title>{t("finance")} - {t("brand")}</title>
      </Head>
      <Formik
        validationSchema={yup.object().shape({
          money: yup.number().required().min(-1000).max(1000),
          detail: yup.string().max(64),
        })}
        onSubmit={(APIParams: object) => {
          console.log(APIParams);
          // API.Post("users/login", { APIParams }).then((response) => {
          //   // ...
          // });
        }} initialValues={{ money: 0, detail: t("unknown"), }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col><InputGroup hasValidation>
                <InputGroup.Text>{t("amount")}</InputGroup.Text>
                <Form.Control placeholder={t("money")} name="money" value={values.money} onBlur={handleBlur} onChange={handleChange} isInvalid={touched.money && errors.money} />
                <InputGroup.Text>{t("RMB")}</InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errors.money}</Form.Control.Feedback>
              </InputGroup></Col>
              <Col><InputGroup hasValidation>
                <InputGroup.Text>{t("reason")}</InputGroup.Text>
                <Form.Control placeholder={t("detail")} name="detail" value={values.detail} onBlur={handleBlur} onChange={handleChange} isInvalid={touched.detail && errors.detail} />
                <Form.Control.Feedback type="invalid">{errors.detail}</Form.Control.Feedback>
              </InputGroup></Col>
              <Col><Button type="submit">{t("addButton")}</Button></Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}


// TO-DO: https://stackoverflow.com/questions/49389202/yup-doesnt-work-properly-with-i18n