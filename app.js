const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
// app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
    console.log("URL :", req.url);
    res.setHeader("Content-Security-Policy", "script-src 'self' cdnjs.cloudflare.com cdn.jsdelivr.net checkout.razorpay.com 'u" +
            "nsafe-inline'");
    res.sendFile(path.join(__dirname, `views/html/${req.url}.html`));
});

app.listen(6001, () => {
    console.log("server started on 6001");
});
