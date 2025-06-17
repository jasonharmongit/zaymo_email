import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import GoatedEmail from "./goated-email.jsx";

const html = renderToString(<GoatedEmail />);

// Prepend the AMP-required doctype
const docType = "<!doctype html>\n";
// Remove all instances of ="true" for AMP boolean attributes
const htmlNoTrue = html.replace(/="true"/g, "");
// Remove all mso-padding-alt styles for AMP compliance
const htmlNoMsoPaddingAlt = htmlNoTrue.replace(/mso-padding-alt:[^;"']*;?/g, "");
// Remove all mso-text-raise styles for AMP compliance
const htmlNoMsoTextRaise = htmlNoMsoPaddingAlt.replace(/mso-text-raise:[^;"']*;?/g, "");

// Combine all transformations
const fixedHtml = `${docType}${htmlNoMsoTextRaise}`;

fs.writeFileSync("converted_email.html", fixedHtml);

console.log("HTML written to converted_email.html");
