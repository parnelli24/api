export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Yalnızca POST isteklerine izin verilir.' });
  }

  const targetURL = 'https://script.google.com/macros/s/AKfycbz6s_fyVkbrhbtKmh0Qfqa3fWoeMoBuJlwOU6ShgE6nLG8mql2pnji1-0HWJD1tQPh4FA/exec';

  try {
    const response = await fetch(targetURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    return res.status(200).json({ status: 'ok', result: text });
  } catch (err) {
    console.error('❌ Proxy hatası:', err);
    return res.status(500).json({ status: 'error', error: err.toString() });
  }
}
