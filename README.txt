Gamal & Omnia Wedding Invitation

Files:
- index.html
- music.mp3
- preview.jpg (WhatsApp / social link preview)
- google-apps-script.gs (optional Google Sheets message storage)

GitHub Pages:
https://gamaltansh123.github.io/gamal-omnia-wedding/

MESSAGE FORM SETUP
1. Create a new Google Sheet.
2. Extensions -> Apps Script.
3. Paste the content of google-apps-script.gs.
4. Save.
5. Deploy -> New deployment -> Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Copy the Web app URL ending in /exec.
9. Open index.html and replace:
   YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
   with your /exec URL.
10. Upload the updated index.html to GitHub.

The guest messages will be stored in the "Messages" sheet with timestamp, name, message, and page URL.

WHATSAPP PREVIEW
The site includes Open Graph metadata and preview.jpg. WhatsApp may cache link previews; after the first deploy, it can take some time before a refreshed preview appears.
