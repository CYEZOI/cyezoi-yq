import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import useSWR from "swr";
import { API } from "@/api";
import { Button, Table } from "react-bootstrap";
import Link from "next/link";
import { QuestionCircle } from "react-bootstrap-icons";

export default function group() {
  const { t } = i18n;

  const [groupId, setGroupId] = React.useState<number | null>(null);
  React.useEffect(() => {
    const tempGroupId: string | null = new URLSearchParams(window.location.search).get("groupId");
    if (tempGroupId != null)
      setGroupId(parseInt(tempGroupId));
    else
      setGroupId(null);
  }, []);

  const { data: groupData } = useSWR((groupId ? "group?groupIdList=" + groupId : "group"), API.SWRGet);
  const groupDataProvider = groupData as {
    group: Array<{
      groupId: number;
      groupName: string;
    }>;
  };

  const { data: groupMemberData } = useSWR(() => {
    if (groupId == null) return null;
    return "groupMember?groupIdList=" + groupId;
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

  const { data: studentData } = useSWR(() => {
    if (groupId == null) return null;
    return "student?studentIdList=" + groupMemberDataProvider.student.map(groupMember => groupMember.studentId).join(",");
  }, API.SWRGet);
  const studentDataProvider = studentData as {
    student: Array<{
      studentId: number;
      studentName: string;
    }>;
  };

  if (groupId == null) {
    return (
      <>
        <Head>
          <title>{t("group") + " - " + t("brand")}</title>
        </Head>
        <div>
          <h3>{t("group")}</h3>
          <Link href="https://langningchen.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=ARDuOKKlzxZuJS8m3taVedozZOLLVtLWxE18McaBo4yB&docid=1_1823989ae405b4a4297754384ec9f397c&wdFormId=%7BA0F92D2B%2D87CF%2D43AD%2DB760%2DBB1DEF8D3BE7%7D" target="_blank">
            <Button variant="outline-primary mb-3"><QuestionCircle className="me-1" />{t("feedback")}</Button>
          </Link>
          <Table>
            <thead>
              <tr>
                <th>{t("groupId")}</th>
                <th>{t("groupName")}</th>
                <th>{t("action")}</th>
              </tr>
            </thead>
            <tbody>
              {groupDataProvider ? groupDataProvider.group.map(group => (
                <tr key={group.groupId}>
                  <td>{group.groupId}</td>
                  <td>{group.groupName}</td>
                  <td>
                    <Button variant="outline-primary" onClick={() => setGroupId(group.groupId)} size="sm">{t("enter")}</Button>
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
        <title>{t("group") + " - " + t("brand")}</title>
      </Head>
      <h3>
        {t("group")}{groupDataProvider ? " - " + groupDataProvider.group.find(group => group.groupId == groupId)?.groupName : null}
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
          {groupMemberDataProvider ? groupMemberDataProvider.student.map(groupMember => (
            <tr key={groupMember.studentId} className={groupMember.group[0].leader ? "table-primary" : ""}>
              <td>{groupMember.studentId}</td>
              <td>{studentDataProvider ? studentDataProvider.student.find(student => student.studentId == groupMember.studentId)?.studentName : null}</td>
            </tr>
          )) : null}
        </tbody>
      </Table>
    </>
  );
}