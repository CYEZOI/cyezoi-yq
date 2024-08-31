import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import { Formik } from "formik";
import i18n from "./_i18n";
import Head from "next/head";
import { Badge, Col, Row, Table } from "react-bootstrap";
import { API } from "./_api";
import useSWR from "swr";

export default function student() {
  const { t } = i18n;
  const { data, error, mutate } = useSWR("student", API.Get);
  if (error) {
    // handle error
  }

  var newData = {
    "student": [],
    "group": {},
    "role": {},
  };
  if (data) {
    for (let group in data["group"]) {
      newData["group"][data["group"][group]["id"]] = data["group"][group]["name"];
    }
    for (let role in data["role"]) {
      newData.role[data["role"][role]["id"]] = data["role"][role]["name"];
    }
    for (let student in data["student"]) {
      var studentData = {
        "id": data["student"][student]["id"],
        "name": data["student"][student]["name"],
        "gender": data["student"][student]["gender"],
        "group": [],
        "role": [],
      };
      for (let group in data["groupMember"]) {
        if (data["groupMember"][group]["student"] == data["student"][student]["id"]) {
          var groupData = {
            id: data["groupMember"][group]["group"],
            name: newData.group[data["groupMember"][group]["group"]],
            leader: data["groupMember"][group]["leader"],
          };
          studentData.group.push(groupData);
        }
      }
      for (let role in data["roleMember"]) {
        if (data["roleMember"][role]["student"] == data["student"][student]["id"]) {
          var roleData = {
            id: data["roleMember"][role]["role"],
            name: newData.role[data["roleMember"][role]["role"]],
          };
          studentData.role.push(roleData);
        }
      }
      newData.student.push(studentData);
    }
  }

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
          {data && newData["student"].map((student: object) => (
            <tr key={student["id"]}>
              <td>{student["id"]}</td>
              <td>{student["name"]}</td>
              <td>{student["gender"] ? "男" : "女"}</td>
              <td>
                {student["group"].map((group: object) => (
                  <Badge key={group["id"]} bg={group["leader"] ? "primary" : "secondary"}>
                    {group["name"]}
                  </Badge>
                ))}
              </td>
              <td>
                {student["role"].map((role: object) => (
                  <Badge key={role["id"]}>
                    {role["name"]}
                  </Badge>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}