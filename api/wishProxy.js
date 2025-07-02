export default async function handler(req, res) {
    const url = 'https://script.google.com/macros/s/AKfycbx5hF5eJUNYhJ1ZIXe4V5J5-GfPmg-pckfbwDQdI_onHCRihuSfOnyaUq7vmK19xwIO2w/exec';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Biar aman juga di local dev
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(data);
    } catch (err) {
      console.error("🔥 Proxy error:", err);
      res.status(500).json({ error: "Failed to fetch from Apps Script" });
    }
  }
  