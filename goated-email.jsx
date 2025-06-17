import React from "react";
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
        <BlackButton>Hello World</BlackButton>
      </body>
    </html>
  );
}
