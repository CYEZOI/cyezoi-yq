import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Badge, Col, Placeholder, Table } from "react-bootstrap";
import { API } from "@/api";
import useSWR from "swr";
import { GenderFemale, GenderMale } from "react-bootstrap-icons";

export default function student() {
  const { t } = i18n;

  const [studentName, setStudentName] = React.useState<string | null>(null);
  React.useEffect(() => {
    typeof localStorage !== "undefined" && setStudentName(localStorage.getItem("studentName"));
  });

  const { data: studentData } = useSWR("student", API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: number;
      studentName: string;
      gender: boolean;
    }>;
  };

  const { data: roleMemberData } = useSWR(() => {
    if (!studentDataProvider) return null;
    const student = studentDataProvider.student.map(student => student.studentId).join(",");
    return "roleMember?studentIdList=" + student;
  }, API.SWRGet);
  const roleMemberDataProvider = roleMemberData as {
    student: Array<{
      studentId: number;
      role: Array<{
        roleId: number;
      }>;
    }>;
  };

  const { data: roleData } = useSWR(() => {
    if (!roleMemberDataProvider) return null;
    const role = roleMemberDataProvider.student.map(roleMember => roleMember.role.map(role => role.roleId)).join(",");
    return "role?roleIdList=" + role;
  }, API.SWRGet);
  const roleDataProvider = roleData as {
    role: Array<{
      roleId: number;
      roleName: string;
    }>;
  };

  return (
    <>
      <Head>
        <title>{t("student") + " - " + t("brand")}</title>
      </Head>
      <h3>{t("student")}</h3>
      <Table>
        <thead>
          <tr>
            <th className="col-2">{t("studentId")}</th>
            <th className="col-6">{t("studentName")}</th>
            <th className="col-2">{t("gender")}</th>
            <th className="col-2">{t("psychologicalGender")}</th>
          </tr>
        </thead>
        <tbody>
          {studentDataProvider && studentDataProvider.student.map((student: any) => (
            <tr key={student["studentId"]} className={studentName == student["studentName"] ? "table-primary" : ""}>
              <td>{student["studentId"]}</td>
              <td>
                {student["studentName"]}
                {roleMemberDataProvider ? roleMemberDataProvider.student.filter(roleMember => roleMember.studentId == student["studentId"]).map(roleMember => (
                  roleMember.role.map(role => (
                    <Badge className="ms-2" key={role.roleId} role="button" onClick={() => { window.location.href = "/role?roleId=" + role.roleId; }}>
                      {roleDataProvider ? roleDataProvider.role.filter(roleData => roleData.roleId == role.roleId).map(roleData => roleData.roleName) : t("role") + " " + role.roleId}
                    </Badge>
                  ))
                )) : <Placeholder className="ms-2" animation="wave"><Placeholder as={Col} xs={3} /></Placeholder>}
              </td>
              <td>{student["gender"] ? <><GenderMale className="me-1" />{t("male")}</> : <><GenderFemale className="me-1" />{t("female")}</>}</td>
              <td>{student["psychologicalGender"]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}