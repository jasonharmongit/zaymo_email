import { Button } from "@react-email/components";
import React from "react";

export default function Email() {
  return (
    <html amp4email="true" data-css-strict>
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style amp4email-boilerplate="true">{`body{visibility:hidden}`}</style>
        <style amp-custom="true">{`
          h1 {
            margin: 1rem;
          }
          .button {
            background: #000;
            color: #fff;
            padding: 12px 20px;
            text-decoration: none;
            border-radius: 4px;
            display: inline-block;
            font-size: 16px;
            margin: 1rem;
          }
        `}</style>
      </head>
      <body>
        <h1>Hello, I am an AMP EMAIL!</h1>
        <Button href="https://example.com">Click me</Button>
      </body>
    </html>
  );
}
