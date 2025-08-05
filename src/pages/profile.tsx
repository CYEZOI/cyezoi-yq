import React, { useState, useEffect } from "react";
import i18n from "@/i18n";
import Head from "next/head";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function Profile() {
  const { t } = i18n;

  const [profile, setProfile] = useState<any>(null);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("未登录，请先登录");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `/api/profile?token=${encodeURIComponent(token)}&lang=zh`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            console.log("获取到的用户资料:", data.data);
            setProfile(data.data);
            setCurrentUserId(data.data.currentUserId || data.data.userId);
          } else {
            setError(data.message || "获取资料失败");
          }
        } else {
          setError("获取资料失败");
        }
      } catch (err) {
        console.error("获取资料错误:", err);
        setError("获取资料失败");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Container className="my-4">
        <div className="text-center">{t("loading")}</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{t("profile") + " - " + t("brand")}</title>
      </Head>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <div className="text-center mb-4">
                  <img
                    src="/avatar.png"
                    alt="Avatar"
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h2>{profile?.username || "未知用户"}</h2>
                  <p className="text-muted">
                    用户编号: {profile?.userId}
                  </p>
                  <p className="text-muted">email: notProvided</p>
                  <p className="text-muted">
                    最后在线: {new Date().toLocaleString()}
                  </p>

                  {/* 只有当前用户才显示编辑按钮 */}
                  <Button
                    variant="primary"
                    onClick={() => router.push("/profile/edit")}
                    className="mt-3"
                  >
                    编辑个人资料
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* 显示个人简介内容 */}
            <Card className="mt-4">
              <Card.Header>
                <h5>个人简介</h5>
              </Card.Header>
              <Card.Body>
                {profile?.description || profile?.content ? (
                  <ReactMarkdown>
                    {profile.description || profile.content}
                  </ReactMarkdown>
                ) : (
                  <p className="text-muted">暂无个人简介</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}