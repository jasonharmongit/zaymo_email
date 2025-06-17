import { Button } from "@react-email/components";
import React from "react";

export default function AmpEmail() {
  return (
    <html amp4email="true" data-css-strict>
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style amp4email-boilerplate="true">{`body{visibility:hidden}`}</style>
        <style amp-custom="true">{`
          h1 {
            margin: 1rem;
          }`}</style>
      </head>
      <body>
        <h1>Hello, I am an AMP EMAIL!</h1>
        <Button
          href="https://example.com"
          style={{
            backgroundColor: "#000000",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Click me
        </Button>
      </body>
    </html>
  );
}
