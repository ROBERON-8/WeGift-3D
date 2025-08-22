import { GoogleSpreadsheet } from "google-spreadsheet";
import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n");

export async function POST(req) {
  try {
    let body = {};
    try {
      body = await req.json();
    } catch (err) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    if (!SHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
      return NextResponse.json({ error: "Missing Google Sheets credentials" }, { status: 500 });
    }

    // Authenticate
    const auth = new GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Connect to sheet
    const doc = new GoogleSpreadsheet(SHEET_ID, auth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Append row
    sheet.addRow({
      Timestamp: new Date().toISOString(),
      OrderDate: new Date().toLocaleDateString(),
      OrderTime: new Date().toLocaleTimeString(),
      Email: body.email,
      ProductName: body.productName,
      OriginalPrice: body.originalPrice,
      SalePrice: body.productPrice,
      ProductId: body.productId,
      Status: "Pending",
    });

    // ✅ Respond immediately with ok: true
    return NextResponse.json({ ok: true, message: "Order saved!" }, { status: 200 });

  } catch (error) {
    console.error("❌ API error:", error);
    // Respond with ok: false
    return NextResponse.json({ ok: false, error: "Failed to save order", details: error.message }, { status: 500 });
  }
}
