const { google } = require("googleapis");
const secrets = require("../secrets");
const { keyFile, scopes, sheetID } = secrets;

exports.getSheetByName = async (req, res, next) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFile,
      scopes: scopes,
    });
    const name = await req.headers.name;
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = sheetID;
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: name,
    });
    res.send(getRows.data);
  } catch (err) {
    next(
      "check the key and value of your call headers, for example.. name: page-name"
    );
    // console.log(err);
  }
};
