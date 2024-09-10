import Head from "next/head";
import t18n from "@/i18n";
import { Formik } from "formik";
import * as yup from "yup";
import { API } from "@/api";
import { Button, FloatingLabel, Form, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function password() {
  const { t } = t18n;

  const [tab, setTab] = useState<string>("changeInfo");
  const [userId, setUserId] = useState<string>("");
  const { data: userData } = useSWR(userId ? "user?userIdList=" + userId : null, API.SWRGet);
  const userDataProvider = userData as {
    user: Array<{
      userId: number;
      username: string;
      studentId: string;
      gender: boolean;
      psychologicalGender: string;
    }>;
  };

  const { data: studentData } = useSWR(() => {
    if (!userDataProvider) return null;
    return "student?studentIdList=" + userDataProvider.user.map(user => user.studentId).join(",");
  }, API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: string;
      studentName: string;
      gender: boolean;
      psychologicalGender: string;
    }>;
  };

  useEffect(() => {
    if (typeof location !== "undefined") {
      const searchParams = new URLSearchParams(location.search);
      setUserId(searchParams.get("userId") || "");
      setTab(searchParams.get("tab") || "changeInfo");
    }
  }, []);

  return (
    <>
      <Head>
        <title>{t("changeInfo") + " - " + t("brand")}</title>
      </Head>
      <h3>{t("changeInfo")}</h3>
      <Nav variant="underline" defaultActiveKey={tab} onSelect={(tab) => { tab && setTab(tab) }} className="mb-2">
        <Nav.Item><Nav.Link eventKey="changeInfo">{t("changeInfo")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="changeStudentName">{t("changeStudentName")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="changeStudentGender">{t("changeStudentGender")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="changePassword">{t("changePassword")}</Nav.Link></Nav.Item>
      </Nav>
      {(() => {
        if (tab === "changeInfo")
          return <Formik
            validationSchema={yup.object().shape({
              userId: yup.number().typeError(t("requireNumber")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
              username: yup.string().typeError(t("requireString")).required(t("required")).min(4, t("minLen4")).max(16, t("maxLen16")),
              studentId: yup.string().typeError(t("requireString")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
            })}
            onSubmit={(params: object) => {
              const values = params as { userId: string, username: string, studentId: string };
              API.Put("user", {
                params: {
                  userId: parseInt(values.userId),
                  username: values.username,
                  studentId: parseInt(values.studentId),
                }
              }, {
                showSuccess: true,
              });
            }} initialValues={{
              userId,
              username: userDataProvider?.user[0]?.username || "",
              studentId: userDataProvider?.user[0]?.studentId || "",
            }} enableReinitialize={true}>
            {(props) => {
              const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
              const valuesProvider = values as { userId: string, username: string, studentId: string };
              const touchedProvider = touched as { userId: boolean, username: boolean, studentId: boolean };
              const errorsProvider = errors as { userId: string, username: string, studentId: string };
              return <Form noValidate onSubmit={handleSubmit}>
                <FloatingLabel controlId="userId" label={t("userId")} className="mb-3">
                  <Form.Control placeholder={t("userId")} name="userId" value={valuesProvider.userId} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.userId && errorsProvider.userId != null}   {...(userId === "" ? {} : { disabled: true })} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.userId}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="username" label={t("username")} className="mb-3">
                  <Form.Control placeholder={t("username")} name="username" value={valuesProvider.username} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.username && errorsProvider.username != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.username}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="studentId" label={t("studentId")} className="mb-3">
                  <Form.Control placeholder={t("studentId")} name="studentId" value={valuesProvider.studentId} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.studentId && errorsProvider.studentId != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.studentId}</Form.Control.Feedback>
                </FloatingLabel>
                <Button type="submit">{t("update")}</Button>
              </Form>;
            }}
          </Formik>;
        if (tab === "changeStudentName")
          return <Formik
            validationSchema={yup.object().shape({
              studentId: yup.string().typeError(t("requireString")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
              studentName: yup.string().typeError(t("requireString")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
            })}
            onSubmit={(params: object) => {
              const values = params as { studentId: string, studentName: string };
              API.Put("student", {
                params: {
                  studentId: parseInt(values.studentId),
                  studentName: values.studentName,
                }
              }, {
                showSuccess: true,
              });
            }} initialValues={{
              studentId: userDataProvider?.user[0]?.studentId || "",
              studentName: studentDataProvider?.student[0]?.studentName || ""
            }} enableReinitialize={true}>
            {(props) => {
              const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
              const valuesProvider = values as { studentId: string, studentName: string };
              const touchedProvider = touched as { studentId: boolean, studentName: boolean };
              const errorsProvider = errors as { studentId: string, studentName: string };
              return <Form noValidate onSubmit={handleSubmit}>
                <FloatingLabel controlId="studentId" label={t("studentId")} className="mb-3">
                  <Form.Control placeholder={t("studentId")} name="studentId" value={valuesProvider.studentId} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.studentId && errorsProvider.studentId != null} {...(userId === "" ? {} : { disabled: true })} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.studentId}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="studentName" label={t("studentName")} className="mb-3">
                  <Form.Control placeholder={t("studentName")} name="studentName" value={valuesProvider.studentName} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.studentName && errorsProvider.studentName != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.studentName}</Form.Control.Feedback>
                </FloatingLabel>
                <Button type="submit">{t("update")}</Button>
              </Form>;
            }}
          </Formik>;
        if (tab === "changeStudentGender")
          return <Formik
            validationSchema={yup.object().shape({
              studentId: yup.string().typeError(t("requireString")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
              gender: yup.string().typeError(t("requireString")).required(t("required")),
              psychologicalGender: yup.string().typeError(t("requireString")),
            })}
            onSubmit={(params: object) => {
              const values = params as { studentId: string, gender: string, psychologicalGender: string };
              API.Put("student", {
                params: {
                  studentId: parseInt(values.studentId),
                  gender: (values.gender == "male" ? true : false),
                  psychologicalGender: values.psychologicalGender,
                }
              }, {
                showSuccess: true,
              });
            }} initialValues={{
              studentId: userDataProvider?.user[0]?.studentId || "",
              gender: (studentDataProvider?.student[0]?.gender || "") ? "male" : "female",
              psychologicalGender: studentDataProvider?.student[0]?.psychologicalGender || ""
            }} enableReinitialize={true}>
            {(props) => {
              const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
              const valuesProvider = values as { studentId: string, gender: string, psychologicalGender: string };
              const touchedProvider = touched as { studentId: boolean, gender: boolean, psychologicalGender: boolean };
              const errorsProvider = errors as { studentId: string, gender: string, psychologicalGender: string };
              return <Form noValidate onSubmit={handleSubmit}>
                <FloatingLabel controlId="studentId" label={t("studentId")} className="mb-3">
                  <Form.Control placeholder={t("studentId")} name="studentId" value={valuesProvider.studentId} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.studentId && errorsProvider.studentId != null} {...(userId === "" ? {} : { disabled: true })} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.studentId}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="gender" label={t("gender")} className="mb-3">
                  <Form.Select name="gender" value={valuesProvider.gender} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.gender && errorsProvider.gender != null}>
                    <option value="male" {...(valuesProvider.gender ? { selected: true } : {})}>{t("male")}</option>
                    <option value="female" {...(valuesProvider.gender ? {} : { selected: true })}>{t("female")}</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errorsProvider.gender}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="psychologicalGender" label={t("psychologicalGender")} className="mb-3">
                  <Form.Control placeholder={t("psychologicalGender")} name="psychologicalGender" value={valuesProvider.psychologicalGender} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.psychologicalGender && errorsProvider.psychologicalGender != null} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.psychologicalGender}</Form.Control.Feedback>
                </FloatingLabel>
                <Button type="submit">{t("update")}</Button>
              </Form>;
            }}
          </Formik>;
        if (tab === "changePassword")
          return <Formik
            validationSchema={yup.object().shape({
              userId: yup.number().typeError(t("requireNumber")).required(t("required")).min(1, t("min1")).max(38, t("max38")),
              password: yup.string().typeError(t("requireString")).required(t("required")).min(8, t("minLen8")).max(64, t("maxLen64")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]).{8,64}$/, t("requireStrongPassword")),
              confirmPassword: yup.string().typeError(t("requireString")).required(t("required")).oneOf([yup.ref("password")], t("passwordNotMatch")),
            })}
            onSubmit={(params: object) => {
              const values = params as { userId: string, password: string };
              API.Put("user", {
                params: {
                  userId: parseInt(values.userId),
                  password: values.password,
                }
              }, {
                showSuccess: true,
              });
            }} initialValues={{ userId, password: "", confirmPassword: "" }} enableReinitialize={true}>
            {(props) => {
              const { handleSubmit, handleChange, handleBlur, values, touched, errors } = props;
              const valuesProvider = values as { userId: string, password: string, confirmPassword: string };
              const touchedProvider = touched as { userId: boolean, password: boolean, confirmPassword: boolean };
              const errorsProvider = errors as { userId: string, password: string, confirmPassword: string };
              return <Form noValidate onSubmit={handleSubmit}>
                <FloatingLabel controlId="userId" label={t("userId")} className="mb-3">
                  <Form.Control type="number" placeholder={t("userId")} name="userId" value={valuesProvider.userId} onBlur={handleBlur} onChange={handleChange} isInvalid={touchedProvider.userId && errorsProvider.userId != null} {...(userId === "" ? {} : { disabled: true })} />
                  <Form.Control.Feedback type="invalid">{errorsProvider.userId}</Form.Control.Feedback>
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
          </Formik >;
      })()}
    </>
  );
}