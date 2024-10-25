import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import useSWR from "swr";
import { API } from "@/api";
import { Button, Col, Form, InputGroup, Modal, Placeholder, Row, Table } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { BoxArrowRight, Key, Question, Trash } from "react-bootstrap-icons";

export default function user() {
  const { t } = i18n;

  const [userId, setUserId] = React.useState<number | null>(null);
  const [showModal, setShowModal] = React.useState<number | null>(null);
  React.useEffect(() => {
    const tempUserId: string | null = new URLSearchParams(window.location.search).get("userId");
    if (tempUserId != null)
      setUserId(parseInt(tempUserId));
    else
      setUserId(null);
  }, []);

  const { data: userData, mutate: userMutate } = useSWR(userId ? "user?userIdList=" + userId : "user", API.SWRGet);
  const userDataProvider = userData as {
    user: Array<{
      userId: number;
      username: string;
      studentId: string;
      permission: number;
      lastOnline: string;
    }>;
  };

  const { data: studentData, mutate: studentMutate } = useSWR(() => {
    if (userDataProvider == null) return null;
    return "student?studentIdList=" + userDataProvider.user.map(user => user.studentId).join(",");
  }, API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: string;
      studentName: string;
    }>;
  };

  const mutate = () => {
    userMutate();
    studentMutate();
  };

  if (userId == null) {
    return (
      <>
        <Head>
          <title>{t("user") + " - " + t("brand")}</title>
        </Head>
        <h3>{t("user")}</h3>
        <Formik
          validationSchema={yup.object().shape({
            username: yup.string().typeError(t("requireString")).required(t("required")).min(4, t("minLen4")).max(16, t("maxLen16")),
            password: yup.string().typeError(t("requireString")).required(t("required")).min(8, t("minLen8")).max(64, t("maxLen64")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]).{8,64}$/, t("requireStrongPassword")),
            studentId: yup.number().typeError(t("requireNumber")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
            permission: yup.number().typeError(t("requireNumber")).required(t("required")).min(0, t("min0")),
          })}
          onSubmit={(params: object) => {
            API.Post("user", { params }, {
              success: () => {
                mutate();
              }, showSuccess: true,
            });
          }}
          initialValues={{ username: "", password: "", studentId: 0, permission: 5 }}
        >
          {(props) => {
            const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
            const valuesProvider = values as { username: string, password: string, studentId: number, permission: number };
            const touchedProvider = touched as { username: boolean, password: boolean, studentId: boolean, permission: boolean };
            const errorsProvider = errors as { username: string, password: string, studentId: string, permission: string };
            return <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col><InputGroup>
                  <InputGroup.Text>{t("username")}</InputGroup.Text>
                  <Form.Control type="text" name="username" value={valuesProvider.username} onChange={handleChange} onBlur={handleBlur} isInvalid={touchedProvider.username && errorsProvider.username != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.username}</Form.Control.Feedback>
                </InputGroup></Col>
                <Col><InputGroup>
                  <InputGroup.Text>{t("password")}</InputGroup.Text>
                  <Form.Control type="password" name="password" value={valuesProvider.password} onChange={handleChange} onBlur={handleBlur} isInvalid={touchedProvider.password && errorsProvider.password != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.password}</Form.Control.Feedback>
                </InputGroup></Col>
                <Col><InputGroup>
                  <InputGroup.Text>{t("studentId")}</InputGroup.Text>
                  <Form.Control type="number" name="studentId" value={valuesProvider.studentId} onChange={handleChange} onBlur={handleBlur} isInvalid={touchedProvider.studentId && errorsProvider.studentId != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.studentId}</Form.Control.Feedback>
                </InputGroup></Col>
                <Col><InputGroup>
                  <InputGroup.Text>{t("permission")}</InputGroup.Text>
                  <Form.Control type="number" name="permission" value={valuesProvider.permission} onChange={handleChange} onBlur={handleBlur} isInvalid={touchedProvider.permission && errorsProvider.permission != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.permission}</Form.Control.Feedback>
                </InputGroup></Col>
                <Col><Button type="submit">{t("create")}</Button></Col>
              </Row>
            </Form>;
          }}
        </Formik>
        <Table>
          <thead>
            <tr>
              <th>{t("id")}</th>
              <th>{t("username")}</th>
              <th>{t("studentId")}</th>
              <th>{t("studentName")}</th>
              <th>{t("lastOnline")}</th>
              <th>{t("operation")}</th>
            </tr>
          </thead>
          <tbody>
            {userDataProvider && userDataProvider.user.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.studentId}</td>
                <td>{studentDataProvider
                  ? studentDataProvider.student.find(student => student.studentId == user.studentId)?.studentName
                  : <Placeholder className="ms-2" animation="wave"><Placeholder as={Col} xs={12} /></Placeholder>
                }</td>
                <td>{new Date(user.lastOnline).toLocaleString()}</td>
                <td>
                  <Button onClick={() => {
                    location.href = "/userInfo?userId=" + user.userId;
                  }} variant="outline-success" size="sm" className="me-2">
                    <Question className="me-1" />{t("changeInfo")}
                  </Button>
                  <Button onClick={() => {
                    location.href = "/permission?userId=" + user.userId;
                  }} variant="outline-warning" size="sm" className="me-2">
                    <Key className="me-1" />{t("permission")}
                  </Button>
                  <Button onClick={() => {
                    API.Delete("token", { userId: user.userId.toString() }, {
                      showSuccess: true
                    });
                  }} variant="outline-danger" size="sm" className="me-2">
                    <BoxArrowRight className="me-1" />{t("logout")}
                  </Button>
                  <Button onClick={() => {
                    setShowModal(user.userId);
                  }} variant="danger" size="sm">
                    <Trash className="me-1" />{t("delete")}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal != null} onHide={() => setShowModal(null)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{t("delete")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {t("deleteUserConfirm", { username: userDataProvider?.user.find(user => user.userId == showModal)?.username })}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {
              API.Delete("user", { userId: showModal!.toString() }, {
                success: () => {
                  mutate();
                  setShowModal(null);
                }, showSuccess: true
              });
            }} variant="danger">{t("delete")}</Button>
            <Button onClick={() => setShowModal(null)} variant="outline-secondary">{t("cancel")}</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}