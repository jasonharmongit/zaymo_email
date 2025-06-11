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
to_email = "jasonharmonboy@gmail.com"
subject = "Welcome Jason to the future of email!"

# Get current date in the format: Sat, Jun 14, 2025
current_date = datetime.now().strftime("%a, %b %d, %Y")

# Read HTML content from file and replace placeholder
with open("calendar_email_box.html", "r", encoding="utf-8") as f:
    html = f.read().replace("{{CURRENT_DATE}}", current_date)

# Create message
msg = MIMEMultipart("alternative")
msg["Subject"] = subject
msg["From"] = from_email
msg["To"] = to_email
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
