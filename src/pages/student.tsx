import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Badge, Col, Placeholder, Table } from "react-bootstrap";
import { API } from "@/api";
import useSWR from "swr";

export default function student() {
  const { t } = i18n;

  const { data: studentData } = useSWR("student", API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: number;
      studentName: string;
      gender: boolean;
    }>;
  };

  const { data: groupMemberData } = useSWR(() => {
    const student = studentDataProvider.student.map(student => student.studentId).join(",");
    return student ? "groupMember?student=" + student : null;
  }, API.SWRGet);
  const groupMemberDataProvider = groupMemberData as {
    student: Array<{
      studentId: number;
      group: Array<{
        groupId: number;
        leader: boolean;
      }>;
    }>;
  };

  const { data: groupData } = useSWR(() => {
    const group = groupMemberDataProvider ? groupMemberDataProvider.student.map(groupMember => groupMember.group.map(group => group.groupId)).join(",") : null;
    return group ? "group?groupId=" + group : null;
  }, API.SWRGet);
  const groupDataProvider = groupData as {
    group: Array<{
      groupId: number;
      groupName: string;
    }>;
  };

  const { data: roleMemberData } = useSWR(() => {
    const student = studentDataProvider.student.map(student => student.studentId).join(",");
    return student ? "roleMember?student=" + student : null;
  }, API.SWRGet);
  const roleMemberDataProvider = roleMemberData as {
    student: Array<{
      studentId: number;
      role: Array<number>;
    }>;
  };

  const { data: roleData } = useSWR(() => {
    const role = roleMemberDataProvider ? roleMemberDataProvider.student.map(roleMember => roleMember.role).join(",") : null;
    return role ? "role?roleId=" + role : null;
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
            <th className="col-2">{t("studentNumber")}</th>
            <th className="col-2">{t("studentName")}</th>
            <th className="col-2">{t("gender")}</th>
            <th className="col-3">{t("group")}</th>
            <th className="col-3">{t("role")}</th>
          </tr>
        </thead>
        <tbody>
          {studentDataProvider && studentDataProvider.student.map((student: any) => (
            <tr key={student["studentId"]}>
              <td>{student["studentId"]}</td>
              <td>{student["studentName"]}</td>
              <td>{student["gender"] ? t("male") : t("female")}</td>
              <td>
                {groupMemberDataProvider ? groupMemberDataProvider.student.filter(groupMember => groupMember.studentId == student["studentId"]).map(groupMember => (
                  groupMember.group.map(group => (
                    <Badge key={group.groupId} bg={group.leader ? "primary" : "secondary"}>
                      {groupDataProvider ? groupDataProvider.group.filter(groupData => groupData.groupId == group.groupId).map(groupData => groupData.groupName) : t("group") + " " + group.groupId}
                    </Badge>
                  ))
                )) : <Placeholder animation="wave"><Placeholder as={Col} xs={12} /></Placeholder>}
              </td>
              <td>
                {roleMemberDataProvider ? roleMemberDataProvider.student.filter(roleMember => roleMember.studentId == student["studentId"]).map(roleMember => (
                  roleMember.role.map(role => (
                    <Badge key={role} bg="primary">
                      {roleDataProvider ? roleDataProvider.role.filter(roleData => roleData.roleId == role).map(roleData => roleData.roleName) : t("role") + " " + role}
                    </Badge>
                  ))
                )) : <Placeholder animation="wave"><Placeholder as={Col} xs={12} /></Placeholder>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}