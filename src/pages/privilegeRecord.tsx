import React, { useState } from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Badge, Card, Pagination } from "react-bootstrap";
import useSWR from "swr";
import { API } from "@/api";

export default function privilegeRecord() {
  const { t } = i18n;
  const [page, setPage] = useState<number>(1);

  const { data: privilegeRecordData } = useSWR("privilegeRecord?page=" + page, API.SWRGet);
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

  const { data: studentData } = useSWR(() => {
    const student = privilegeRecordDataProvider ? privilegeRecordDataProvider.privilegeRecord.map(record => record.student).join(",") : null;
    return student ? "student?student=" + student : null;
  }, API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: number;
      studentName: string;
      gender: boolean;
    }>;
  };

  const { data: groupData } = useSWR(() => {
    const group = privilegeRecordDataProvider ? privilegeRecordDataProvider.privilegeRecord.filter(record => record.type == "group").map(record => record.value).join(",") : null;
    return group ? "group?groupId=" + group : null;
  }, API.SWRGet);
  const groupDataProvider = groupData as {
    group: Array<{
      groupId: number;
      groupName: string;
    }>;
  };

  const { data: roleData } = useSWR(() => {
    const role = privilegeRecordDataProvider ? privilegeRecordDataProvider.privilegeRecord.filter(record => record.type == "role").map(record => record.value).join(",") : null;
    return role ? "role?roleIdList=" + role : null;
  }, API.SWRGet);
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
      <Pagination className="justify-content-center">
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page == 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} disabled={privilegeRecordDataProvider == null || page == Math.ceil(privilegeRecordDataProvider.privilegeRecordSize / 10)} />
        <Pagination.Last onClick={() => setPage(Math.ceil(privilegeRecordDataProvider.privilegeRecordSize / 10))} />
      </Pagination>
      {privilegeRecordDataProvider && privilegeRecordDataProvider.privilegeRecord.map((record) => (
        <Card key={record.id} className="mb-2" border={record.io ? "info" : "secondary"}>
          <Card.Body>
            <Card.Title>{studentDataProvider ? studentDataProvider.student.find(student => student.studentId == record.student)?.studentName : t("student") + record.student}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{record.date}</Card.Subtitle>
            <Card.Text>
              {record.io ? t("gain") : t("lose")}
              {t(record.type)}{t("colon")}
              {(() => {
                if (record.type == "group")
                  return <Badge key={record.value} role="button" onClick={() => { window.location.href = "/group?groupId=" + record.value; }}>
                    {groupDataProvider ? groupDataProvider.group.find(group => group.groupId == record.value)?.groupName : t("group") + record.value}
                  </Badge>;
                if (record.type == "role")
                  return <Badge key={record.value} role="button" onClick={() => { window.location.href = "/role?roleIdList=" + record.value; }}>
                    {roleDataProvider ? roleDataProvider.role.find(role => role.roleId == record.value)?.roleName : t("role") + record.value}
                  </Badge>;
                return <>{record.type} {record.value}</>;
              })()}
              {t("comma")}
              {t("reason")}{t("colon")}{record.reason}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  </>
  );
}