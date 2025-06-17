import os
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Email details
from_email = "contactjasonharmon@gmail.com"
to_email = "santi@zaymo.com"
subject = "jason finally did it"

# Get current date in the format: Sat, Jun 14, 2025
current_date = datetime.now().strftime("%a, %b %d, %Y")

intro_html = (
    "Couldn't get it done in 30 minutes, but I did get it done. "
    "This email uses react-email buttons and is fully AMP compliant. "
    "What I currently lack in knowledge, I promise to make up for in time + effort."
)
signoff_html = "<br><br>Best,<br>Jason"

# Read HTML content from file and replace placeholder
with open("converted-email.html", "r", encoding="utf-8") as f:
    html_content = f.read().replace("{{CURRENT_DATE}}", current_date)

# Combine for the HTML part
html = f"<div>{intro_html}</div>{html_content}{signoff_html}"

# Plain text body
text = (
    "Couldn't get it done in 30 minutes, but I did get it done. "
    "This email uses react-email buttons and is fully AMP compliant. "
    "What I currently lack in knowledge, I promise to make up for in time + effort."
    "\n\nBest,\nJason"
)

# Create message
msg = MIMEMultipart("alternative")
msg["Subject"] = subject
msg["From"] = from_email
msg["To"] = to_email
msg.attach(MIMEText(text, "plain"))
msg.attach(MIMEText(html, "html"))

# Send the email (using Gmail SMTP)
smtp_server = "smtp.gmail.com"
smtp_port = 587

# Get password from environment variable
password = os.getenv("FROM_EMAIL_PASSWORD")
if not password:
    raise ValueError("FROM_EMAIL_PASSWORD not set in .env file")

with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.starttls()
    server.login(from_email, password)
    server.sendmail(from_email, to_email, msg.as_string())

print("Email sent!")
