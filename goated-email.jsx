import React from "react";
import { FiLink } from "react-icons/fi";
import BlackButton from "./components/black-button.jsx";

export default function GoatedEmail() {
  return (
    <html amp4email="true" data-css-strict>
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style amp4email-boilerplate="true">{`body{visibility:hidden}`}</style>
      </head>
      <body>
        <BlackButton>
          <FiLink style={{ verticalAlign: "middle", marginRight: 6 }} />
          Hello World
        </BlackButton>
      </body>
    </html>
  );
}
