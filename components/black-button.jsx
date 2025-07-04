import { Button } from "@react-email/components";
import React from "react";

export default function BlackButton({ link, children }) {
  return (
    <Button
      href={link}
      style={{
        backgroundColor: "#000000",
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        fontFamily: "Arial, sans-serif",
        fontWeight: 600,
        fontSize: "14px",
      }}
    >
      {children}
    </Button>
  );
}
