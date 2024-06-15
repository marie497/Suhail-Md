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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_09_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUURGVHZyd05RSnNXN1pBTWJqWEcrUGJ5YTVkQzJHemdEZzc5Nk5qZW9qQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQTJVVDZnVWxRdENkUFpvZ2x5OGp3UVwiLFxuICBcInBob25lSWRcIjogXCJiOTU4ZGFiZi0zZjZmLTQ0YjUtOTZjNS1lYzhlNjZhYjNiNzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICA0MCxcbiAgICAgIDI1MixcbiAgICAgIDg3LFxuICAgICAgMTE5LFxuICAgICAgODIsXG4gICAgICAxMTYsXG4gICAgICAyMDcsXG4gICAgICAxNzUsXG4gICAgICA1MSxcbiAgICAgIDE2NCxcbiAgICAgIDIwNixcbiAgICAgIDE3OCxcbiAgICAgIDIxMixcbiAgICAgIDE0MCxcbiAgICAgIDE1MSxcbiAgICAgIDIzMCxcbiAgICAgIDE1NSxcbiAgICAgIDczLFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDQxLFxuICAgICAgOTgsXG4gICAgICA5NSxcbiAgICAgIDk4LFxuICAgICAgMjEyLFxuICAgICAgMTg5LFxuICAgICAgMTE3LFxuICAgICAgNSxcbiAgICAgIDUyLFxuICAgICAgODksXG4gICAgICAxNjUsXG4gICAgICA3MCxcbiAgICAgIDIxNSxcbiAgICAgIDE3NCxcbiAgICAgIDE4NSxcbiAgICAgIDE2NixcbiAgICAgIDI0MSxcbiAgICAgIDk1LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdSWk5ZSkY3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTQ3NDIwNzM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjE4MjcyMTg2Nzk2NzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRFVoUEVCRUlxSnRyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlcydW03anFlUUJhS3ZPRU05emUrb1ZiNjZYSHFETjNlT3NTU0ZVWm9yQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid0YvamJtbnJ4WmpyUkw2SUlGWlo1TVFORWpINmZva2lFeGlwbHFQS1pkc2FCM0RyNGNEbm5wSkJSR0RtblRvS2dzdlMzYlR0N01nUzExelEvVElHQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMUVWaUJ3N2hCL29WQ0FrS3BNNFoya2d3SldrWEFwOEF0dEZ0Zm1IYlZXYVQ1emJVeHhwaDlZcTJZQUl4K01neXlycVZPUmNPbUdRV1dVbU5lOXU5QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTU0NzQyMDczOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NDUzMzkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQngwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCeDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1SXJYNDBHTDJKcHQxR3lUeERVcW1FdW5BRGpiMGg1K2Z0NlFCTURyUUFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwNTQ4OTk2NixcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
