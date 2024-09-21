import React from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { API } from "@/api";
import { Button, Offcanvas, ProgressBar } from "react-bootstrap";
import { CloudArrowUp, Link, Trash } from "react-bootstrap-icons";
import useSWR from "swr";
import styles from "./image.module.css";
import { pipeInstance } from "@/pipe";

export default function role() {
  const { t } = i18n;
  const { data: imageData, mutate: imageMutate } = useSWR("image", API.SWRGet);
  const imageDataProvider = imageData as {
    records: {
      imageId: string,
      userId: number,
      image: string,
      createdAt: string,
    }[]
  };

  const { data: userData } = useSWR(() => {
    if (imageDataProvider == null || imageDataProvider.records.length == 0) return null;
    return "user?userIdList=" + imageDataProvider.records.map(record => record.userId).join(",");
  }, API.SWRGet);
  const userDataProvider = userData as {
    user: Array<{
      userId: number,
      username: string,
    }>;
  };

  const [showOffcanvas, setShowOffcanvas] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [imageCount, setImageCount] = React.useState<number>(0);
  const [successCount, setSuccessCount] = React.useState<number>(0);
  const [failedCount, setFailedCount] = React.useState<number>(0);
  var DragElement: EventTarget | null = null;

  const handleFile = (fileList: FileList) => {
    var imageCount = 0;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.type.indexOf("image/") !== 0) {
        continue;
      }
      imageCount++;
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result == null) return;
        const image = e.target.result as string;
        await API.Post("image", { params: { image } }, {
          success: () => {
            imageMutate();
            setSuccessCount(successCount => successCount + 1);
          },
          failure: () => {
            setFailedCount(failedCount => failedCount + 1);
          },
          error: () => {
            setFailedCount(failedCount => failedCount + 1);
          },
        });
      }
      reader.readAsDataURL(file);
    }
    setImageCount(imageCount);
  }

  return (
    <>
      <Head>
        <title>{t("image") + " - " + t("brand")}</title>
      </Head>
      <div>
        <h3>{t("image")}</h3>
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
                input.multiple = true;
                input.accept = "image/*";
                input.onchange = (e) => {
                  if (input.files) {
                    handleFile(input.files);
                  }
                }
                input.click();
              }}>{t("selectFile")}</Button>
            </div>
            <ProgressBar className="w-100 mt-2">
              <ProgressBar animated variant="success" now={successCount} max={imageCount} key={1} />
              <ProgressBar animated variant="danger" now={failedCount} max={imageCount} key={2} />
            </ProgressBar>
          </div>
        </div>
        <Offcanvas show={showOffcanvas != null} onHide={() => setShowOffcanvas(null)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("image")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {(() => {
              const image = imageDataProvider?.records.find(record => record.imageId == showOffcanvas);
              return image ? <>
                <img src={image.image} alt={image.imageId} className="w-100" />
                <div className="mt-3">{t("uploadUser") + t("colon")}{userDataProvider ? userDataProvider.user.find(user => user.userId == image.userId)?.username : t("user") + image.userId}</div>
                <div className="mt-1">{t("createdAt") + t("colon")}{new Date(image.createdAt).toLocaleString()}</div>
                <div className="mt-3">
                  <Button onClick={() => {
                    navigator.clipboard.writeText(location.origin + "/api/image?imageId=" + image.imageId);
                    pipeInstance.emit("newAlert", { variant: "success", message: t("copyLinkSuccess") });
                  }} variant="outline-primary" size="sm" className="me-2"><Link className="me-1" />{t("copyLink")}</Button>
                  <Button onClick={() => {
                    API.Delete("image", { imageId: image.imageId }, {
                      success: () => {
                        imageMutate();
                        setShowOffcanvas(null);
                      }, showSuccess: true,
                    });
                  }} variant="danger" size="sm"><Trash className="me-1" />{t("delete")}</Button>
                </div>
              </> : null;
            })()}
          </Offcanvas.Body>
        </Offcanvas>
        {imageDataProvider && <div className="d-flex flex-wrap mt-3">
          {imageDataProvider.records.map((record) => (
            <div key={record.imageId} className={styles.previewImage + " p-2"}>
              <img src={record.image} alt={record.imageId} className="rounded h-100" onClick={() => {
                setShowOffcanvas(record.imageId);
              }} />
            </div>
          ))}
        </div>
        }
      </div >
    </>
  );
}