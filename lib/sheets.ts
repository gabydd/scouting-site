import { sheets_v4, auth } from "@googleapis/sheets";
import keys from "key.json"

const service_auth = new auth.JWT({
  email: keys.client_email,
  key: keys.private_key,
  keyId: keys.private_key_id, 
  scopes: [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});
const sheets = new sheets_v4.Sheets({ auth: service_auth});
export default sheets;
