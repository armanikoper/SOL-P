async function pingSolana() {
  try {
    const res = await fetch("https://sol.hnano.workers.dev");
    const text = await res.text();
    console.log(`[${new Date().toISOString()}] پاسخ:`, text);
  } catch (e) {
    console.error("خطا در ارسال درخواست:", e);
  }
}

pingSolana();
setInterval(pingSolana, 14_000);
