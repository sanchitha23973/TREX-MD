// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkluNnA1Vm40WUpBVktTdVVQWmUzbCt1OERvTXc3L0xPSjIvMUtNR0Rubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnBvdVFhK0RGU3h3YVYxZ1lnVmVuMEFnREFNMWlPQkI0YXVlTkVsVmhEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR3ZDeVAzZHFiVWRTZjRNZDAwSmFQbFNMOVVkK2V1UDlGYXB5aGFHd0VzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBM2hZYTBUQTZsd0tqZlBTY0FLUkZnQTRORFRvNXBzVWgxeGtPMDdnalJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGK2hnVlFFM2l2M0x5RlRKaHphalhQVWFqNDl0WUlMU2NyclJoSzRobkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU4UVdYeEMrVXZvMlpmYkQ2RFBGMnZCSlUvOVBhNE5yN2ZUMVFyTDZuUjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEk3RnpKVCs3cjZwQkdEMkNyeFo4bHVQUXo1Y1AycFVXL3NJUS9TM3FGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS08reWV2Z2ljVC8wSnI1TG1jQkhubWxIOVpyTTd0TDNtNkZNR2wxaVdDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik00R21WMTdadG1TS0Fnd0lrY3VHdXBQRDFkQVNXN1RFdzFOQk9Pd3NnY0ZVT056VU95LzBvZnAyRzdMWUhsdE9HSkV6bmFDL24yNHNpNDhIVnFnc2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiY2hWTklrRXRhTUpDS1kzbU5mSU0zUjExMG4vZEFvbmN6bjUxSFZhRHJraz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUzdHMVhKQjNTLVdkM3NqMElBWGNrZyIsInBob25lSWQiOiJiNDI0MWE0OS0yOGIyLTRlZmQtODRhNS04MjJiMmFmMTk5MGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkQxNTJhdnpiYmtPemR2TTBWN1lTbFdTbkRZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZhc0dYU0p5bC81VDJpanQybmdvQTM0S0ZTcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKSEhWNVRSUiIsIm1lIjp7ImlkIjoiOTQ3NDI4MTc3ODQ6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi1Y/NsuGOqs2y4YKu1Y8g4Y+U4Y674Y+GzbLhjqwg1Y/hjqrhj5/hjrvhj4bOnSBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICDhnarhlrThlrThj4bhkZXhj4bhl6njgZcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BEeXFOZ0hFTnFMbjdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFEcFN4NkhQNkMvT1czdDkwVXU0Y2pwQk14TlVGaGNGQnp4Ykhpa0VoMWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVXcW0xWHMwWUU0ZzJDaHNLM1F0dkFkWXZOSitHN1RBc095WkduU0dKcWowTnNRSlN0eTVtNEtieUt2cWF6UmJXcUJXbG16RVltdEVMc1dzc0Z0akN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhWmN6MWlMNks1bm0yYmhVUUJhT0ZSMFlmbzRPRjhmcU92SDVRamVla1BoRFV3dTR5N1dRYWYydFpndzlsM0E1S1JxVGJ4TDJrWk1vS3M1OEN6T3dpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQyODE3Nzg0OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldnNlVzZWh6K2d2emx0N2ZkRkx1SEk2UVRNVFZCWVhCUWM4V3g0cEJJZFkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA2NTk4MTR9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Bera",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94742817784",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
