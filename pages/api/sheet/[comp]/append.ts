import type { NextApiRequest, NextApiResponse } from "next";
import sheets from "@lib/sheets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const res1 = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID, 
  });
  res.status(200);
}
