import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import dynamic from "next/dynamic";
import styles from "./edit.module.css";

// 动态导入 Markdown 编辑器
const ReactMde = dynamic(() => import("react-mde"), { ssr: false });
import "react-mde/lib/styles/css/react-mde-all.css";

// 新增：动态引入 react-markdown
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

const ProfileEdit: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("未登录，请先登录");
          // 可以重定向到登录页面
          // window.location.href = "/login";
          return;
        }
        
        console.log("获取到的 token:", token); // 调试信息
        
        const response = await fetch(`/api/profile?token=${encodeURIComponent(token)}&lang=zh`);
        if (response.ok) {
          const data = await response.json();
          setValue(
            data.data?.description || "# 个人简介\n\n在这里写下您的个人简介..."
          );
        } else {
          setError("获取资料失败，请重新登录");
        }
      } catch (err) {
        console.error("获取资料错误:", err);
        setError("获取资料失败");
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("未登录，请先登录");
        setLoading(false);
        return;
      }
      
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          lang: "zh",
          description: value,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSuccess("保存成功！正在跳转到个人资料页面...");
          // 保存成功后跳转到个人资料页面
          setTimeout(() => {
            window.location.href = "/profile";
          }, 1500);
        } else {
          throw new Error(result.message || "保存失败");
        }
      } else {
        const errorData = await response.text();
        console.error("保存响应错误:", errorData);
        throw new Error(`HTTP ${response.status}: 保存失败`);
      }
    } catch (err: any) {
      console.error("保存错误:", err);
      setError(err?.message || "保存失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  // Markdown 预览渲染函数
  const generateMarkdownPreview = async (markdown: string) => {
    return <div style={{padding: 8}}><ReactMarkdown>{markdown}</ReactMarkdown></div>;
  };

  return (
    <Container className="my-4">
      <h2>编辑个人资料</h2>
      
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert variant="success">
          {success}
        </Alert>
      )}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>个人简介 (支持 Markdown 格式)</Form.Label>
          <div className={styles.markdownEditor}>
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={generateMarkdownPreview}
              childProps={{
                writeButton: {
                  tabIndex: -1,
                },
                textArea: {
                  placeholder: "在这里输入您的个人简介...",
                },
              }}
              toolbarCommands={[
                ["header", "bold", "italic", "strikethrough"],
                ["link", "quote", "code"],
                ["unordered-list", "ordered-list"],
                ["image"],
              ]}
            />
          </div>
        </Form.Group>

        <div className="d-flex gap-2 justify-content-end">
          <Button
            variant="secondary"
            onClick={() => window.location.href = "/profile"}
            disabled={loading}
          >
            查看个人资料
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => window.history.back()}
            disabled={loading}
          >
            取消
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "保存中..." : "保存"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ProfileEdit;
