import Head from "next/head";
import t18n from "@/i18n";
import { API } from "@/api";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Button, Form, Table } from "react-bootstrap";

const permissionName = [
    "login",
    "financeWrite",
    "createUser",
    "listUser",
    "updateOtherPassword",
    "updatePermission",
    "updateOtherInfo",
    "changeStudentBasicInfo",
    "logoutOther",
];

export default function permission() {
    const { t } = t18n;
    const [userId, setUserId] = useState<number | null>(null);
    const [permission, setPermission] = useState<number>(-1);
    const { data: permissionData } = useSWR(userId ? "user?userIdList=" + userId : null, API.SWRGet);
    const permissionDataProvider = permissionData as {
        user: Array<{
            userId: number,
            studentId: number,
            permission: number,
        }>;
    }

    const { data: studentData } = useSWR(() => {
        if (permissionDataProvider == null) return null;
        return "student?studentIdList=" + permissionDataProvider.user.map(user => user.studentId).join(",");
    }, API.SWRGet);
    const studentDataProvider = studentData as {
        student: Array<{
            studentId: number,
            studentName: string,
        }>;
    }
    studentDataProvider && permission == -1 && setPermission(permissionDataProvider.user[0].permission);

    useEffect(() => {
        if (typeof location !== "undefined") {
            const searchParams = new URLSearchParams(location.search);
            setUserId(parseInt(searchParams.get("userId") || ""));
        }
    });

    console.log(permission);

    return (
        <>
            <Head>
                <title>{t("permission") + " - " + t("brand")}</title>
            </Head>
            <h3>
                {t("permission")}{studentDataProvider ? " - " + studentDataProvider.student.map(student => student.studentName).join(", ") : null}
            </h3>
            {permissionDataProvider && <Table>
                <thead>
                    <tr>
                        <th>{t("permission")}</th>
                        <th>{t("status")}</th>
                    </tr>
                </thead>
                <tbody>
                    {permissionName.map((permissionName, index) => (
                        <tr key={index}>
                            <td>{t(permissionName)}</td>
                            <td>{(() => {
                                const enabled: boolean = (permission & (1 << index)) != 0;
                                return <Form.Check type="switch" label={t(enabled ? "enabled" : "disabled")} checked={enabled} onChange={() => {
                                    console.log(permission, index, permission ^ (1 << index));
                                    setPermission(permission ^ (1 << index));
                                }} />;
                            })()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>}
            <Button onClick={() => {
                API.Put("user", {
                    params: {
                        userId,
                        permission,
                    },
                }, {
                    showSuccess: true,
                });
            }}>{t("update")}</Button>
        </>
    )
}