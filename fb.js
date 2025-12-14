```js
const axios = require("axios");

module.exports = {
  name: "fb",
  alias: ["facebook"],
  category: "downloader",
  desc: "Download Facebook video",
  use: "<facebook video url>",
  async exec(m, sock, args) {
    if (!args[0]) return m.reply("Please provide a Facebook video link.");

    let url = args[0];
    m.reply("Downloading video...");

    try {
      let res = await axios.get(`https://api.xyroinee.xyz/api/facebook?url=${url}&apikey=YOUR_API_KEY`);
      let videoUrl = res.data.result.hd || res.data.result.sd;

      if (!videoUrl) return m.reply("Failed to fetch video.");

      await sock.sendMessage(m.chat, { video: { url: videoUrl }, caption: "Here is your Facebook video!" }, { quoted: m });

    } catch (e) {
      console.log(e);
      m.reply("An error occurred. Please check the link and try again.");
    }
  },
};
```
