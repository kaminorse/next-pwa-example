/** @jsxImportSource @emotion/react */
import AppConfig from "@/configurations/app.config";
import { css } from "@emotion/react";
import Image from "next/image";
import queryString from "query-string";
import { useId } from "react";

export default function LineLoginButton(): JSX.Element {
  const id = useId();

  const baseUrl = "https://access.line.me/oauth2/v2.1/authorize";
  const lineData = {
    response_type: "code",
    client_id: "1657898231",
    redirect_uri: "https://kaminorse.github.io/next-pwa-example/account/line/callback",
    state: id,
    scope: "profile%20openid",
  };

  return (
    <a
      css={css`
        color: #ffffff;
        margin: 0;
        box-sizing: border-box;
        display: inline-block;
        background-color: #06c755;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        &:hover {
          opacity: 0.9;
        }
        &:active {
          opacity: 0.7;
        }
      `}
      href={`${baseUrl}?${queryString.stringify(lineData)}`}
    >
      <Image
        src={`${AppConfig.BASE_URL}/images/line-logo.png`}
        alt={"LINE"}
        width={64}
        height={64}
        css={css`
          width: 48px;
          height: auto;
          vertical-align: middle;
          border-right: 1px solid #ebebeb;
          padding: 0.25rem;
          margin: 0.25rem;
        `}
      />
      <span
        css={css`
          margin: 0.25rem 1rem;
          vertical-align: middle;
          font-weight: bold;
        `}
      >
        {"LINEでログイン"}
      </span>
    </a>
  );
}
