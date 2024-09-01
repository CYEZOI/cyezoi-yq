import React, { useState } from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Card, Pagination } from "react-bootstrap";
import useSWR from "swr";
import { API } from "@/api";

export default function privilegeRecord() {
  const { t } = i18n;
  const [page, setPage] = useState(1);

  const { data: privilegeRecordData, error: privilegeRecordError } = useSWR("privilegeRecord?page=" + page, API.Get);
  if (privilegeRecordError) {
    // handle error
  }
  const privilegeRecordDataProvider = privilegeRecordData as {
    privilegeRecord: Array<{
      id: number;
      student: number;
      date: string;
      io: boolean;
      type: string;
      value: number;
      reason: string;
    }>,
    privilegeRecordSize: number;
  };

  const { data: studentData, error: studentError } = useSWR(() => {
    const student = privilegeRecordDataProvider ? privilegeRecordDataProvider.privilegeRecord.map(record => record.student).join(",") : null;
    return student ? "student?student=" + student : null;
  }, API.Get);
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

  const { data: groupData, error: groupError } = useSWR(() => {
    const group = privilegeRecordDataProvider ? privilegeRecordDataProvider.privilegeRecord.filter(record => record.type == "group").map(record => record.value).join(",") : null;
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

  const { data: roleData, error: roleError } = useSWR(() => {
    const role = privilegeRecordDataProvider ? privilegeRecordDataProvider.privilegeRecord.filter(record => record.type == "role").map(record => record.value).join(",") : null;
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

  return (<>
    <Head>
      <title>{t("privilegeRecord") + " - " + t("brand")}</title>
    </Head>
    <div>
      <h3>{t("privilegeRecord")}</h3>
      <Pagination>
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page == 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} disabled={privilegeRecordDataProvider == null || page == Math.ceil(privilegeRecordDataProvider.privilegeRecordSize / 10)} />
        <Pagination.Last onClick={() => setPage(Math.ceil(privilegeRecordDataProvider.privilegeRecordSize / 10))} />
      </Pagination>
      {privilegeRecordDataProvider && privilegeRecordDataProvider.privilegeRecord.map((record: any) => (
        <Card key={record.id} className="mb-2">
          <Card.Body>
            <Card.Title>{studentDataProvider ? studentDataProvider.student.find(student => student.studentId == record.student)?.studentName : t("student") + record.student}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{record.date}</Card.Subtitle>
            <Card.Text>
              {record.io ? t("gain") : t("lose")}
              {t(record.type)}{t("colon")}
              {record.type == "group"
                ? groupDataProvider ? groupDataProvider.group.find(group => group.groupId == record.value)?.groupName : t("group") + record.value
                : roleDataProvider ? roleDataProvider.role.find(role => role.roleId == record.value)?.roleName : t("role") + record.value}
              {t("comma")}
              {t("reason")}{t("colon")}{record.reason}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  </>
  );
}