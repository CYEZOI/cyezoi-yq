import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import { Formik } from "formik";
import i18n from "./_i18n";
import Head from "next/head";
import { Col, Row, Table } from "react-bootstrap";
import { API } from "./_api";
import useSWR from "swr";

export default function finance() {
  const { t } = i18n;
  const { data, error, mutate } = useSWR("finance", API.Get);
  if (error) {
    // handle error
  }

  return (
    <>
      <Head>
        <title>{t("finance") + " - " + t("brand")}</title>
      </Head>
      <h3>{t("finance")}</h3>
      <Formik
        validationSchema={yup.object().shape({
          money: yup.number().typeError(t("requireNumber")).required(t("required")).min(-1000, t("min1000")).max(1000, t("max1000")).not([0], t("required")),
          detail: yup.string().typeError("requireString").required(t("required")).min(8, t("minLen8")).max(64, t("maxLen64")),
        })}
        onSubmit={(params: object) => {
          API.Post("finance", { params: params }).then((response) => {
            // ...
            mutate();
          });
        }} initialValues={{ money: 0, detail: "", }}
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
      <Table>
        <thead>
          <tr>
            <th className="col-2">{t("id")}</th>
            <th className="col-2">{t("time")}</th>
            <th className="col-2">{t("amount")}</th>
            <th className="col-6">{t("reason")}</th>
            <th className="col-2">{t("operation")}</th>
          </tr>
        </thead>
        <tbody>
          {data && data["records"].map((record: object) => (
            <tr key={record["id"]}>
              <td>{record["id"]}</td>
              <td>{new Date(record["createdAt"]).toLocaleString()}</td>
              <td>{record["money"]} {t("RMB")}</td>
              <td>{record["detail"]}</td>
              <td><Button onClick={() => {
                API.Delete("finance", { id: record["id"] }).then((response) => {
                  // ...
                  mutate();
                });
              }} variant="danger" size="sm">{t("delete")}</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}