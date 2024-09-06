import Head from "next/head";
import t18n from "@/i18n";
import { Formik } from "formik";
import * as yup from "yup";
import { API } from "@/api";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { pipeInstance } from "@/pipe";

export default function login2() {
    const { t } = t18n;
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
                    API.Get("login", values).then((response: any) => {
                        const userId = response.userId;
                        API.Get("user", { userIdList: userId }).then((response: any) => {
                            const studentId = response.user[0].studentId;
                            API.Get("student", { studentIdList: studentId }).then((response: any) => {
                                if (response.student.length === 0) {
                                    pipeInstance.emit("newAlert", { message: t("studentNotFound"), variant: "danger" }); // TO-DO
                                }
                                const studentName = response.student[0].studentName;
                                localStorage.setItem("studentName", studentName);
                                location.href = "/";
                            });
                        });
                    });
                }} initialValues={{ username: "", password: "", }}>
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
            </Formik>
        </>
    );
}