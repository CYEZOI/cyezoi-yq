import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import { Formik } from "formik";
import i18n from "@/i18n";
import Head from "next/head";
import { Col, Row, Table } from "react-bootstrap";
import { API } from "@/api";
import useSWR from "swr";
import { Bar, CartesianGrid, Line, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Trash } from "react-bootstrap-icons";

export default function finance() {
  const { t } = i18n;
  const { data: financeData, mutate: financeMutate } = useSWR("finance", API.SWRGet);
  const financeDataProvider = financeData as {
    records: {
      financeId: number,
      date: string,
      money: number,
      detail: string,
      createdAt: string,
    }[]
  }

  const { data: financeStaticsData, mutate: financeStaticsMutate } = useSWR("financeStatics", API.SWRGet);
  const financeStaticsDataProvider = financeStaticsData as {
    records: {
      month: string,
      income: number,
      outcome: number,
      balance: number,
    }[]
  }

  const mutate = () => {
    financeMutate();
    financeStaticsMutate();
  };

  return (
    <>
      <Head>
        <title>{t("finance") + " - " + t("brand")}</title>
      </Head>
      <h3>{t("finance")}</h3>
      <Formik
        validationSchema={yup.object().shape({
          type: yup.string().required(t("required")),
          date: yup.date().typeError(t("requireDate")).required(t("required")),
          money: yup.number().typeError(t("requireNumber")).required(t("required")).min(0, t("min0")).max(1000, t("max1000")).not([0], t("required")),
          detail: yup.string().typeError(t("requireString")).required(t("required")).min(8, t("minLen8")).max(64, t("maxLen64")),
        })}
        onSubmit={(params: object) => {
          const paramsProvider = params as { type: string, date: string, money: number, detail: string };
          const values = {
            date: paramsProvider.date,
            money: paramsProvider.money * (paramsProvider.type == "income" ? 1 : -1),
            detail: paramsProvider.detail,
          }
          API.Post("finance", { params: values }, {
            success: () => {
              mutate();
            },
          });
        }}
        initialValues={{ type: "income", date: new Date().toISOString().split("T")[0], money: 0, detail: "", }}
      >
        {(props) => {
          const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
          const valuesProvider = values as { type: string, date: string, money: number, detail: string };
          const touchedProvider = touched as { type: boolean, date: boolean, money: boolean, detail: boolean };
          const errorsProvider = errors as { type: string, date: string, money: string, detail: string };
          return <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col className="col-3 col-sm-2 col-lg-1">
                <Form.Check type="radio" name="type" value="income" onChange={handleChange} label={t("income")} defaultChecked isInvalid={touchedProvider.type && errorsProvider.type != null} />
                <Form.Control.Feedback type="invalid">{errorsProvider.type}</Form.Control.Feedback>
              </Col>
              <Col className="col-3 col-sm-2 col-lg-1">
                <Form.Check type="radio" name="type" value="outcome" onChange={handleChange} label={t("outcome")} isInvalid={touchedProvider.type && errorsProvider.type != null} />
                <Form.Control.Feedback type="invalid">{errorsProvider.type}</Form.Control.Feedback>
              </Col>
              <Col className="col-6 col-sm-4 col-lg-2"><InputGroup hasValidation>
                <InputGroup.Text>{t("date")}</InputGroup.Text>
                <Form.Control type="date" name="date" value={valuesProvider.date} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.date && errorsProvider.date != null} />
                <Form.Control.Feedback type="invalid">{errorsProvider.date}</Form.Control.Feedback>
              </InputGroup></Col>
              <Col className="col-12 col-sm-4 col-lg-2"><InputGroup hasValidation>
                <InputGroup.Text>{t("amount")}</InputGroup.Text>
                <Form.Control placeholder={t("money")} name="money" value={valuesProvider["money"]} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.money && errorsProvider.money != null} />
                <InputGroup.Text>{t("RMB")}</InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errorsProvider.money}</Form.Control.Feedback>
              </InputGroup></Col>
              <Col className="col-12 col-sm-10 col-lg-4"><InputGroup hasValidation>
                <InputGroup.Text>{t("reason")}</InputGroup.Text>
                <Form.Control placeholder={t("detail")} name="detail" value={valuesProvider["detail"]} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.detail && errorsProvider.detail != null} />
                <Form.Control.Feedback type="invalid">{errorsProvider.detail}</Form.Control.Feedback>
              </InputGroup></Col>
              <Col className="col-12 col-sm-2 col-lg-2"><Button type="submit">{t("addButton")}</Button></Col>
            </Row>
          </Form>;
        }}
      </Formik >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={600} height={300} data={financeStaticsDataProvider && financeStaticsDataProvider.records} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#8884d8" name={t("income")} />
          <Bar dataKey="outcome" fill="#82ca9d" name={t("outcome")} />
          <Line type="monotone" dataKey="balance" stroke="#ff7300" />
        </BarChart>
      </ResponsiveContainer>
      <Table>
        <thead>
          <tr>
            <th>{t("date")}</th>
            <th>{t("amount")}</th>
            <th>{t("reason")}</th>
            <th>{t("operation")}</th>
          </tr>
        </thead>
        <tbody>
          {financeDataProvider && financeDataProvider.records.map((record) => (
            <tr key={record.financeId} className={record.money > 0 ? "table-success" : "table-danger"}>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.money} {t("RMB")}</td>
              <td>{record.detail}</td>
              <td><Button onClick={() => {
                API.Delete("finance", { financeId: record.financeId.toString() }, {
                  success: () => {
                    mutate();
                  }
                });
              }} variant="danger" size="sm"><Trash className="me-1" />{t("delete")}</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}