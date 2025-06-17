import React from "react";
import BlackButton from "./components/black-button.jsx";

export default function GoatedEmail() {
  return (
    <html amp4email="true" data-css-strict>
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style amp4email-boilerplate="true">{`body{visibility:hidden}`}</style>
        <style amp-custom="true">{`
          body {
            font-family: Arial, sans-serif;
          }
          h2 {
            font-family: Arial, sans-serif;
            font-weight: bold;
          }
        `}</style>
      </head>
      <body>
        <div
          style={{
            maxWidth: 400,
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #aaa",
            borderRadius: 10,
            padding: 24,
            color: "#232526",
          }}
        >
          <table width="100%" style={{ borderCollapse: "collapse", marginBottom: 0 }}>
            <tr>
              <td style={{ padding: 0, verticalAlign: "middle" }}>
                <h2 style={{ margin: 0, fontSize: "1.5em", fontWeight: 600, color: "#232526" }}>Upcoming Zaymo Hire</h2>
              </td>
              <td style={{ padding: 0, textAlign: "right", verticalAlign: "middle", width: "1%" }}>
                <span
                  style={{
                    background: "none",
                    border: "1px solid #039be5",
                    color: "#039be5",
                    borderRadius: 6,
                    padding: "4px 14px",
                    fontSize: "1em",
                    fontWeight: 500,
                    display: "inline-block",
                  }}
                >
                  Active
                </span>
              </td>
            </tr>
          </table>
          <div style={{ borderBottom: "1px solid #444", margin: "16px 0 20px 0" }}></div>
          <div style={{ fontSize: "1.3em", fontWeight: 600, marginBottom: 18, color: "#232526" }}>
            <span id="current-date">Sat, Jun 14, 2025</span>
          </div>
          <table width="100%" style={{ borderCollapse: "collapse", marginBottom: 0 }}>
            <tr>
              <td style={{ padding: 0, color: "#b0b3b8", fontSize: "1em" }}>Experience in Data</td>
              <td style={{ padding: 0, textAlign: "right", color: "#b0b3b8", fontSize: "1em" }}>Qty: 2 Years</td>
            </tr>
            <tr>
              <td style={{ padding: 0, color: "#b0b3b8", fontSize: "1em" }}>Experience in Full Stack</td>
              <td style={{ padding: 0, textAlign: "right", color: "#b0b3b8", fontSize: "1em" }}>Qty: 4 weeks</td>
            </tr>
            <tr>
              <td style={{ padding: 0, color: "#b0b3b8", fontSize: "1em" }}>Desire to Learn, Grow, & Build</td>
              <td style={{ padding: 0, textAlign: "right", color: "#b0b3b8", fontSize: "1em" }}>Qty: Huge</td>
            </tr>
          </table>
          <div style={{ textAlign: "right", color: "#b0b3b8", fontSize: "1em", marginBottom: 18, marginTop: 2 }}>
            Total: 1 Hungry Founding Engineer
          </div>
          <table width="100%" style={{ borderCollapse: "collapse", margin: "24px 0 18px 0" }}>
            <tr>
              <td style={{ width: "40%", borderBottom: "1px solid #444" }}></td>
              <td
                style={{ width: "20%", textAlign: "center", color: "#b0b3b8", fontSize: "1em", whiteSpace: "nowrap" }}
              >
                One-Time Click to View
              </td>
              <td style={{ width: "40%", borderBottom: "1px solid #444" }}></td>
            </tr>
          </table>
          <table width="100%" style={{ borderCollapse: "collapse", marginBottom: 0 }}>
            <tr>
              <td style={{ textAlign: "center", width: "50%", verticalAlign: "top" }}>
                <amp-img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGSCktcho8PiA/profile-displayphoto-shrink_100_100/B56Zah6oPCGoAU-/0/1746473223524?e=1755734400&v=beta&t=PhArNTCXkNRE0f1EIn2yrKLC5utlAOaVtDwTaSQ9CP8"
                  alt="Jason's Headshot"
                  width="100"
                  height="100"
                />
                <div style={{ marginTop: 8, color: "#b0b3b8", fontSize: "0.98em" }}>Jason's LinkedIn</div>
                <BlackButton link="https://www.linkedin.com/in/contactjasonharmon/">View now</BlackButton>
              </td>
              <td style={{ textAlign: "center", width: "50%", verticalAlign: "top" }}>
                <amp-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8AHWfvfU99X7gPZDKalDYZWcC_ROQc4Fag&s"
                  alt="Jason's Zaymo Email Repo"
                  width="100"
                  height="100"
                />
                <div style={{ marginTop: 8, color: "#b0b3b8", fontSize: "0.98em" }}>The code I used for this email</div>
                <BlackButton link="https://github.com/jasonharmongit/zaymo_email">View now</BlackButton>
              </td>
            </tr>
          </table>
          <table width="100%" style={{ borderCollapse: "collapse", margin: "24px 0 18px 0" }}>
            <tr>
              <td style={{ width: "40%", borderBottom: "1px solid #444" }}></td>
              <td
                style={{ width: "20%", textAlign: "center", color: "#b0b3b8", fontSize: "1em", whiteSpace: "nowrap" }}
              >
                Schedule a Call
              </td>
              <td style={{ width: "40%", borderBottom: "1px solid #444" }}></td>
            </tr>
          </table>
          <BlackButton link="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KiSI1iKIJhfZAtjBQRKngwIKaSnRJXGn5gM1B-Rx3KhQGA80P2uW1JQME2E9monUpLNtQU4jh?gv=true">
            Schedule Call
          </BlackButton>
        </div>
      </body>
    </html>
  );
}
