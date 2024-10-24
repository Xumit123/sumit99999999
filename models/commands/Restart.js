module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhIT",
  description: "",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  return api.sendMessage(`RESTART NOW......\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝PAGLA`, threadID, () => process.exit(1));
}
