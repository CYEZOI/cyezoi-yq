import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import { Formik } from "formik";
import i18n from "@/i18n";
import Head from "next/head";
import { Badge, Col, Placeholder, Row, Table } from "react-bootstrap";
import { API } from "@/api";
import useSWR from "swr";

export default function student() {
  const { t } = i18n;

  const { data: studentData, error: studentError } = useSWR("student", API.Get);
  if (studentError) {
    // handle error
  }
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: number;
      studentName: string;
      gender: boolean;
    }>;
  };

  const { data: groupMemberData, error: groupMemberError } = useSWR(() => {
    const student = studentDataProvider.student.map(student => student.studentId).join(",");
    return student ? "groupMember?student=" + student : null;
  }, API.Get);
  if (groupMemberError) {
    // handle error
  }
  const groupMemberDataProvider = groupMemberData as {
    student: Array<{
      studentId: number;
      group: Array<{
        groupId: number;
        leader: boolean;
      }>;
    }>;
  };

  const { data: groupData, error: groupError } = useSWR(() => {
    const group = groupMemberDataProvider ? groupMemberDataProvider.student.map(groupMember => groupMember.group.map(group => group.groupId)).join(",") : null;
    return group ? "group?groupId=" + group : null;
  }, API.Get);
  if (groupError) {
    // handle error
  }
  const groupDataProvider = groupData as {
    group: Array<{
      groupId: number;
      groupName: string;
    }>;
  };

  const { data: roleMemberData, error: roleMemberError } = useSWR(() => {
    const student = studentDataProvider.student.map(student => student.studentId).join(",");
    return student ? "roleMember?student=" + student : null;
  }, API.Get);
  if (roleMemberError) {
    // handle error
  }
  const roleMemberDataProvider = roleMemberData as {
    student: Array<{
      studentId: number;
      role: Array<number>;
    }>;
  };

  const { data: roleData, error: roleError } = useSWR(() => {
    const role = roleMemberDataProvider ? roleMemberDataProvider.student.map(roleMember => roleMember.role).join(",") : null;
    return role ? "role?roleId=" + role : null;
  }, API.Get);
  if (roleError) {
    // handle error
  }
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