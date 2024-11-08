const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_34_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSL2phb09mbzFLNXlEUkRrUDZtY3dSYXlMME1LdEZ0ckhrT0U2NVBWOU93PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxeU03ZHRUSlF1V3lOblRiUm1CRUNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4MDcwZTRhLTA4MjItNGNjMS1hNTg4LTUzNjQ0ZDg2ZDMxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA1NCxcbiAgICAgIDE4NSxcbiAgICAgIDQ0LFxuICAgICAgODMsXG4gICAgICAyNDAsXG4gICAgICAxOTYsXG4gICAgICAxNzIsXG4gICAgICAxMzcsXG4gICAgICAyMzksXG4gICAgICA1MixcbiAgICAgIDI0MyxcbiAgICAgIDE3MSxcbiAgICAgIDExNCxcbiAgICAgIDY2LFxuICAgICAgMTcwLFxuICAgICAgNTksXG4gICAgICA1LFxuICAgICAgMjMyLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMzUsXG4gICAgICA5NixcbiAgICAgIDEzOSxcbiAgICAgIDIyOSxcbiAgICAgIDQxLFxuICAgICAgMjIwLFxuICAgICAgMTA3LFxuICAgICAgMTk0LFxuICAgICAgMjMyLFxuICAgICAgMzgsXG4gICAgICAyMTksXG4gICAgICAyNTQsXG4gICAgICAxNjMsXG4gICAgICAyMDksXG4gICAgICAyMixcbiAgICAgIDE1NSxcbiAgICAgIDE0OSxcbiAgICAgIDEzOSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE3MUJNV0NIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODI0NzEzNDE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxNzU4MDY3MjQwOTkzOjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ESDhMNEVFS3V6dWJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkNETkxtb1RYa05Md2M4dlR4dTdxYjk1cmZYZlZ0YXJYU3RENFcrTjdXRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVM1Q4cTlFTVVZa0NFbWJVWTdDMTMrRE1LS3ZwSytIb3RINUlEczhETERDeGV4MVU2Ry9HL2VxSWo3M2Z2Zk9XTndCQ0NIQ3BjVXdhL0RMSFpIV0FDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZazlXVGQ3K3ltVCtkUUczTU1lOWpLekYwUENPQVdObEl0UDdkQnR2UC8wWDNQYk5lbDIxUEtyRWh0OWM4QS9QYnUyNlhMcE5ydldaUnk1dGtLL0ZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODI0NzEzNDE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDkwODY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUVvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwdGRaYnRYSmdoNDlwLzhnQXBTaDVuR1ZwMllyNXhxUjA2WUcwQ3VEcnc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDU2MDk0MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEwMTQzMzc1MTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
OWNER_NUMBER="923184474176"
SESSION_ID = "SESSION_85_23_59_01_kjgfgfclhj"
THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
OWNER_NAME = "Suhail"
PREFIX = .
WARN_COUNT = 3
DISABLE_PM = "false"
THEME= "SUHAIL"
MODE = "public"
ANTILINK_VALUES = "https://,chat.whatsapp.com"
  




OWNER_NUMBER="237682471341"
SESSION_ID = "SESSION_85_23_59_01_kjgfgfclhj"
THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
OWNER_NAME = "Suhail"
PREFIX = .
WARN_COUNT = 3
DISABLE_PM = "false"
THEME= "SUHAIL"
MODE = "public"
ANTILINK_VALUES = "https://,chat.whatsapp.com"
  














global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
