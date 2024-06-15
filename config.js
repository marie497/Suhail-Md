const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233554742073";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVI3ZS85QUZwMG1Dc1NMbUd2d1o4WVdDTmxLRlNCQ2ZQVXNGS1JCaU1qbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHAtbnpxc3JTeDZwUENldnZ5dnNXZ1wiLFxuICBcInBob25lSWRcIjogXCIwNzBhN2U2Zi03YmVlLTRiNTQtYTE5NC05OTZmZDhjM2Y3M2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxOTgsXG4gICAgICAxNDgsXG4gICAgICA0LFxuICAgICAgNjcsXG4gICAgICAxNTksXG4gICAgICAxMTQsXG4gICAgICAxOTEsXG4gICAgICAxMTYsXG4gICAgICAxNyxcbiAgICAgIDk5LFxuICAgICAgMjE5LFxuICAgICAgMTgzLFxuICAgICAgMjAxLFxuICAgICAgMTE1LFxuICAgICAgMTExLFxuICAgICAgMSxcbiAgICAgIDExMixcbiAgICAgIDExMCxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDExNCxcbiAgICAgIDE0MyxcbiAgICAgIDEyMSxcbiAgICAgIDEwMyxcbiAgICAgIDIzMyxcbiAgICAgIDYzLFxuICAgICAgMTcxLFxuICAgICAgMTI1LFxuICAgICAgMTk4LFxuICAgICAgMTYzLFxuICAgICAgMTQxLFxuICAgICAgMTc1LFxuICAgICAgMTg4LFxuICAgICAgMjE0LFxuICAgICAgOTgsXG4gICAgICAxMjYsXG4gICAgICAzMyxcbiAgICAgIDE2MSxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCU1lRNTRYMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTU0NzQyMDczOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODYxODI3MjE4Njc5Njc6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzdVaFBFQkVLbit0Yk1HR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXMnVtN2pxZVFCYUt2T0VNOXplK29WYjY2WEhxRE4zZU9zU1NGVVpvckJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhWREhoaTN5Q3E5SGxVRE9WbnpvdWl5aDg4K0tRNnoyMEJsMVNJeXNLcVJuUmd3cFhEWG8yTUVmall4b2l6ZlZOc0xLaFBRaVVnVWxSWFY3dFhJakRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlrQzlRNVQ3UGM4cmdKY2pxdmxOSVZoT2wveGR5aWZHeHdxWnZ6VXRuRUlxNnFJcUpJZmV3cmxsS0NsSEZhQmF3WDFIQkFNOG04NnlKYnhRQVN1WGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1NDc0MjA3MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ1MjAxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ4elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnh6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQlBhZkRUNVlxSFkyMGN4NThmVHF5Mk9KWVhabGhOY3BiL2xKYnFGM21UUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDU0ODk5NjYsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCw3LDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg0NTE5Njg5OTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
