import { Button } from "@react-email/components";
import React from "react";

export default function BlackButton(children) {
  <Button
    href="https://example.com"
    style={{
      backgroundColor: "#000000",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      font: "arial",
      fontWeight: "semibold",
      fontSize: "14px",
    }}
  >
    {children}
  </Button>;
}
