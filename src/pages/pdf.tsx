import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Button } from "react-bootstrap";
import { CloudArrowUp, Download } from "react-bootstrap-icons";
import { PDFDocument } from "pdf-lib";
import Link from "next/link";

export default function role() {
  const { t } = i18n;

  const [dragging, setDragging] = React.useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = React.useState<string>("");
  const [pdfName, setPdfName] = React.useState<string>("");
  var DragElement: EventTarget | null = null;

  const handleFile = (fileList: FileList) => {
    const file = fileList[0];
    if (file.type != "application/pdf") {
      return;
    }
    setPdfName(file.name);
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target?.result == null) return;
      const arrayBuffer = await file.arrayBuffer();
      const pdfBytes = new Uint8Array(arrayBuffer);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      for (let page of pages) {
        if (!page.node.Annots()) continue;
        const annots = page.node.Annots();
        if (annots) {
          for (let i = 0; i < annots.size(); i++) {
            annots.remove(i);
          }
        }
      }
      const changedPdf = await pdfDoc.save();
      const blob = new Blob([changedPdf], { type: 'application/pdf' });
      setPdfUrl(URL.createObjectURL(blob));
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
      <Head>
        <title>{t("removePdfAnnotation") + " - " + t("brand")}</title>
      </Head>
      <div>
        <h3>{t("removePdfAnnotation")}</h3>
        <Link href="https://github.com/zzsqjdhqgb/RemovePDFAnnots" target="_blank">{t("inspirer")}</Link>
        <div className={"w-100 border border-2 rounded " + (dragging ? "border-primary bg-secondary-subtle" : "border-secondary")}
          onDragEnter={(e) => {
            DragElement = e.target;
            setDragging(true);
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            if (e.target != DragElement) return;
            setDragging(false);
            e.preventDefault();
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
          <div className="d-flex flex-column justify-content-center align-items-center h-100 m-5">
            <div>
              <CloudArrowUp className="me-1" />
              <span className="d-none d-md-inline">
                {dragging ? t("releaseToUpload") : t("dragToUpload")}
                <span className="ms-3">{t("or")}</span>
              </span>
              <Button className="ms-3" onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "application/pdf";
                input.onchange = (e) => {
                  if (input.files) {
                    handleFile(input.files);
                  }
                }
                input.click();
              }}>{t("selectFile")}</Button>
            </div>
          </div>
        </div>
        {pdfUrl && <div className="mt-3">
          <a href={pdfUrl} download={pdfName}><Button variant="primary" className="me-2 mb-2"><Download />{t("download")}</Button></a>
          <embed src={pdfUrl} type="application/pdf" width="100%" style={{ minHeight: "100vh" }} />
        </div>}
      </div>
    </>
  );
}
