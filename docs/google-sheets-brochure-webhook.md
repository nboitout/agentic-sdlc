# Brochure form → Google Sheets (+ email notification)

The brochure popup already posts JSON to `NEXT_PUBLIC_BROCHURE_WEBHOOK_URL`.
You can point this URL to a Google Apps Script Web App to append submissions to a Sheet and notify you by email.

## 1) Create your Google Sheet

Create a sheet with this header row:

`timestamp | first_name | family_name | name | email | consent | source | page_url | user_agent`

## 2) Add an Apps Script Web App

In the sheet, open **Extensions → Apps Script** and paste:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');

    const timestamp = data.submitted_at || new Date().toISOString();
    sheet.appendRow([
      timestamp,
      data.first_name || '',
      data.family_name || '',
      data.name || '',
      data.email || '',
      data.consent === true ? 'true' : 'false',
      data.source || '',
      data.page_url || '',
      data.user_agent || '',
    ]);

    // Optional: email notification on each submission
    const notifyTo = 'you@yourcompany.com';
    MailApp.sendEmail({
      to: notifyTo,
      subject: 'New brochure form submission',
      htmlBody:
        '<p><b>New submission</b></p>' +
        `<p><b>Name:</b> ${data.name || ''}<br/>` +
        `<b>Email:</b> ${data.email || ''}<br/>` +
        `<b>Timestamp:</b> ${timestamp}</p>`,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Deploy with **Deploy → New deployment → Web app**:

- Execute as: **Me**
- Who has access: **Anyone**

Copy the web app URL.

## 3) Configure the website

Set this env var in your deployment:

`NEXT_PUBLIC_BROCHURE_WEBHOOK_URL=https://script.google.com/macros/s/.../exec`

Once configured, brochure form submissions append to the sheet, and you receive an email for each submission.
