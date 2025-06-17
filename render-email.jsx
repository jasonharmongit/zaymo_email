import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import Email from "./email.jsx";

const html = renderToString(<Email />);

// Prepend the AMP-required doctype
const docType = "<!doctype html>\n";
// Remove all instances of ="true" for AMP boolean attributes
const htmlNoTrue = html.replace(/="true"/g, "");
// Remove all mso-padding-alt styles for AMP compliance
const htmlNoMsoPaddingAlt = htmlNoTrue.replace(/mso-padding-alt:[^;"']*;?/g, "");
// Combine all transformations
const fixedHtml = `${docType}${htmlNoMsoPaddingAlt}`;

fs.writeFileSync("output.html", fixedHtml);

console.log("HTML written to output.html");
