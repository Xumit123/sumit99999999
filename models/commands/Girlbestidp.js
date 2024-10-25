module.exports.config = {
  name: "frendsdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: " friends dp",
  commandCategory: "Random-IMG",
  usages: "friends dp",
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
    var link = ["https://i.imgur.com/0Hu5yY8.jpeg","https://i.imgur.com/2MGsLzp.jpeg","https://i.imgur.com/pifsNWc.jpeg","https://i.imgur.com/mODLqB7.jpeg","https://i.imgur.com/7yDc734.jpeg","https://i.imgur.com/jYwXS5v.jpeg","https://i.imgur.com/2CPm5JZ.jpeg","https://i.imgur.com/06JS2fX.jpeg","https://i.imgur.com/Q4SBb8X.jpeg","https://i.imgur.com/Q9zHAWr.jpeg","https://i.imgur.com/up27oaW.jpeg","https://i.imgur.com/vuM6Ujg.jpeg","https://i.imgur.com/4TMIFVY.jpeg"          ];
     var callback = () => api.sendMessage({body:`💝💝💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
