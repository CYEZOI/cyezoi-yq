import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import useSWR from "swr";
import { API } from "@/api";
import { Button, Table } from "react-bootstrap";

export default function role() {
  const { t } = i18n;

  const [roleId, setGroupId] = React.useState<number | null>(null);
  React.useEffect(() => {
    const tempGroupId: string | null = new URLSearchParams(window.location.search).get("roleId");
    if (tempGroupId != null)
      setGroupId(parseInt(tempGroupId));
    else
      setGroupId(null);
  }, []);

  const { data: roleData } = useSWR((roleId ? "role?roleIdList=" + roleId : "role"), API.SWRGet);
  const roleDataProvider = roleData as {
    role: Array<{
      roleId: number;
      roleName: string;
    }>;
  };

  const { data: roleMemberData } = useSWR(() => {
    if (roleId == null) return null;
    return "roleMember?roleIdList=" + roleId;
  }, API.SWRGet);
  const roleMemberDataProvider = roleMemberData as {
    student: Array<{
      studentId: number;
      role: Array<{
        roleId: number;
        leader: boolean;
      }>;
    }>;
  };

  const { data: studentData } = useSWR(() => {
    if (roleId == null) return null;
    return "student?studentIdList=" + roleMemberDataProvider.student.map(roleMember => roleMember.studentId).join(",");
  }, API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: number;
      studentName: string;
    }>;
  };

  if (roleId == null) {
    return (
      <>
        <Head>
          <title>{t("role") + " - " + t("brand")}</title>
        </Head>
        <div>
          <h3>{t("role")}</h3>
          <Table>
            <thead>
              <tr>
                <th>{t("roleId")}</th>
                <th>{t("roleName")}</th>
                <th>{t("action")}</th>
              </tr>
            </thead>
            <tbody>
              {roleDataProvider ? roleDataProvider.role.map(role => (
                <tr key={role.roleId}>
                  <td>{role.roleId}</td>
                  <td>{role.roleName}</td>
                  <td>
                    <Button variant="outline-primary" onClick={() => setGroupId(role.roleId)} size="sm">{t("enter")}</Button>
                  </td>
                </tr>
              )) : null}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{t("role") + " - " + t("brand")}</title>
      </Head>
      <h3>
        {t("role")}{roleDataProvider ? " - " + roleDataProvider.role.find(role => role.roleId == roleId)?.roleName : null}
        <Button onClick={() => setGroupId(null)} className="ms-2" size="sm">{t("allGroups")}</Button>
      </h3>
      <Table>
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("studentName")}</th>
          </tr>
        </thead>
        <tbody>
          {roleMemberDataProvider ? roleMemberDataProvider.student.map(roleMember => (
            <tr key={roleMember.studentId} className={roleMember.role[0].leader ? "table-primary" : ""}>
              <td>{roleMember.studentId}</td>
              <td>{studentDataProvider ? studentDataProvider.student.find(student => student.studentId == roleMember.studentId)?.studentName : null}</td>
            </tr>
          )) : null}
        </tbody>
      </Table>
    </>
  );
}