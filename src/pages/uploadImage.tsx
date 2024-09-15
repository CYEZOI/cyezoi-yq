import React, { useState } from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { API } from "@/api";
import { Button } from "react-bootstrap";
import { pipeInstance } from "@/pipe";

export default function role() {
  const { t } = i18n;

  const [dragging, setDragging] = useState(false);
  var DragElement: EventTarget;

  const handleFile = (fileList: FileList) => {
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.type.indexOf("image/") !== 0) {
        continue;
      }
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result == null) return;
        const image = e.target.result as string;
        await API.Post("uploadImage", { params: { image } });
      }
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <Head>
        <title>{t("uploadImage") + " - " + t("brand")}</title>
      </Head>
      <div>
        <h3>{t("uploadImage")}</h3>
        <div className={"w-100 border rounded border-secondary p-3" + (dragging ? " border-3 bg-secondary-subtle" : "")}
          onDragEnter={(e) => {
            DragElement = e.target;
            if (e.dataTransfer.types.includes("Files")) setDragging(true);
          }}
          onDragLeave={(e) => {
            if (DragElement == e.target) {
              e.preventDefault();
              setDragging(false);
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            handleFile(e.dataTransfer.files);
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 m-5">
            {dragging ? t("releaseToUpload") : t("dragToUpload")}
            <Button className="ms-3" onClick={() => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*";
              input.onchange = (e) => {
                if (input.files) {
                  handleFile(input.files);
                }
              }
              input.click();
            }}>{t("selectFile")}</Button>
          </div>
        </div>
      </div >
    </>
  );
}