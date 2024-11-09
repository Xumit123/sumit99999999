const fs = require("fs");
module.exports.config = {
  name: "ram",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("राम") ||
     react.includes("shree") ||
     react.includes("RAM") ||
react.includes("ram")) {
    var msg = {
        body: `༄ᶦᶰᵈ᭄🔥⃝נαι ѕняєє яαм❤️❥❥═══💝 _________________________
    
      राम का नाम सबसे बड़ा है,
      __________________________
      
      🙏जो भी ले 💝 यह नाम,____________________

      उसका बनता सब काम है।🥀🙏🙏👈`,attachment: fs.createReadStream(__dirname + `/noprefix/ram.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
