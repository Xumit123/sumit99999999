module.exports.config = {
  name: "virat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "virat dp",
  commandCategory: "Random-IMG",
  usages: "virat pic",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      
"https://i.imgur.com/cGbfjAt.jpeg","https://i.imgur.com/ptnYNpT.jpeg","https://i.imgur.com/VDgLQlp.jpeg","https://i.imgur.com/Qv0GcBW.jpeg","https://i.imgur.com/pwIlBM7.jpeg","https://i.imgur.com/RXAXazn.jpeg","https://i.imgur.com/XqtTdwa.jpeg","https://i.imgur.com/D4cniGn.jpeg","https://i.imgur.com/NQzgS5f.jpeg","https://i.imgur.com/6QpBLXQ.jpeg","https://i.imgur.com/TOGOQPV.jpeg","https://i.imgur.com/ctlUNHU.jpeg","https://i.imgur.com/RLAS371.jpeg","https://i.imgur.com/L30VTcd.jpeg"

           ];
     var callback = () => api.sendMessage({body:`💝 𝐌𝐚𝐝𝐞 𝐁𝐲 pagla.larka`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
