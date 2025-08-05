import React from "react";
import { NextPageContext } from "next";
import { Container, Alert } from "react-bootstrap";

interface ErrorProps {
  statusCode?: number;
  hasGetInitialProps?: boolean;
  err?: Error;
}

function Error({ statusCode, hasGetInitialProps, err }: ErrorProps) {
  return (
    <Container className="my-4">
      <Alert variant="danger">
        <Alert.Heading>
          {statusCode ? `服务器错误 ${statusCode}` : "客户端错误"}
        </Alert.Heading>
        <p>
          {statusCode === 404
            ? "找不到页面"
            : statusCode === 500
            ? "服务器内部错误"
            : "发生了一个错误"}
        </p>
        {err && process.env.NODE_ENV === "development" && (
          <details>
            <summary>错误详情</summary>
            <pre>{err.message}</pre>
          </details>
        )}
      </Alert>
    </Container>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;