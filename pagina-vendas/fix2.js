const fs=require("fs");
let h=fs.readFileSync("index.html","utf8");
h=h.replace(/href="#preco"/g,'href="https://pay.kiwify.com.br/dBGEodq"');
h=h.replace(/href="#"/g,'href="https://pay.kiwify.com.br/dBGEodq"');
fs.writeFileSync("index.html",h);
console.log("Done! All CTAs updated");
