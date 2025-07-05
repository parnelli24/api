export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "POST") {
    const { name, age, email, country, hobbies, color } = req.body;

    const response = await fetch("https://script.google.com/macros/s/AKfycb.../exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        name,
        age,
        email,
        country,
        hobbies,
        color
      })
    });

    const text = await response.text();
    res.status(200).send(text);
  } else {
    res.status(405).send("Method not allowed");
  }
}
