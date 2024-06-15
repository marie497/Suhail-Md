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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_19_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyR0FPejM3dkk1K1FkL2RsdnJJZmN1NVBXQjBhbURkSnZUZm04cktzSFU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpaTJ0ZzFsVlNJdW1pcnJuM2NrZ0l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmZGI1ZTYyLWVmN2EtNDEwOS04NjlmLTA0MGRkMTdkYjFmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDk3LFxuICAgICAgMjAwLFxuICAgICAgMjMwLFxuICAgICAgNzcsXG4gICAgICA3LFxuICAgICAgMjAyLFxuICAgICAgMTc0LFxuICAgICAgMTg0LFxuICAgICAgNTYsXG4gICAgICAyNDgsXG4gICAgICAxOSxcbiAgICAgIDEyMSxcbiAgICAgIDEzLFxuICAgICAgMTk2LFxuICAgICAgMjEzLFxuICAgICAgMTQxLFxuICAgICAgMTM2LFxuICAgICAgNzEsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA0NixcbiAgICAgIDIyLFxuICAgICAgMTQ1LFxuICAgICAgMjQyLFxuICAgICAgMTA4LFxuICAgICAgNDksXG4gICAgICAxODcsXG4gICAgICAyMDYsXG4gICAgICA2NixcbiAgICAgIDIwMSxcbiAgICAgIDEwLFxuICAgICAgMjcsXG4gICAgICAyMSxcbiAgICAgIDE0NixcbiAgICAgIDE5OSxcbiAgICAgIDIxOSxcbiAgICAgIDE0MyxcbiAgICAgIDE0NyxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0MzZLV0UyM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTU0NzQyMDczOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODYxODI3MjE4Njc5Njc6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzdVaFBFQkVLWFZ0Yk1HR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXMnVtN2pxZVFCYUt2T0VNOXplK29WYjY2WEhxRE4zZU9zU1NGVVpvckJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZ3S0dWWjgxRFBhai9zL2ZBUlBZWjZVVy9PZkxPc25YMXUxcldIdEZzcWl4Tm5VNGM4bFltMUZpeUxOVkR0T1lOcFlmZnp5bUdHV2d1U0JFQktPRkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdwRmQ1RWFYNGZzQ0JNL2NzdVFUL0dSTHlDME9sY0g2dzNXbURnMEtVODdJMjNxNnhSS2xlOEZXSmJveDRWeTltYndJM2xBeWpsOWlnTnI2bXdGckFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1NDc0MjA3MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ0Njc2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
