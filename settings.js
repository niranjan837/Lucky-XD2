
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "LuckyM2-H4sIAAAAAAAAA5VVy46jRhT9l9raGmOwwUZqKYAxxhi/MeBoFmUooMyzi8IGj/oPskgWkXrTyi/2J0T0Y3oWyaSzqyrQueeec27VN5DluEQGaoD4DRQEXyBF7ZI2BQIikKsgQAR0gQ8pBCLYaGNn50cn1ZulPUdDwXG9SOu545l2cNb4aNHcs/rW4BWVuQMPXVBUpwR7PwGUiYHuR66vH6qOqiwW9BR7NiUrLGyrU/+UzvTVbRnC6brW78BDiwgxwVmoFhFKEYGJgZo1xORz9Bn1HJYdOI2Grm3Re7mW5pQ/7dcrJSxHee80lPbLIc9d5rb1OfrqOgnG+SlWbG45FZplr1F3tbLtW3WoqOwpHU966qk+O6WivtIvcZghX/dRRjFtPq17R+POq9X5pNi3QxFzGyPkNrwm9LdzZ2WzTkibQLt3Gu4af5I47c+FeeoO3CEzMTvbc293LGfqNL4tmA4/pgNeIOOzpk2Xifsj8TV5z0r8f3QfmdVkoPGKWR8zSTKHUn1JM28kDFFjH/YjUk8u8/jKFr0k/Bz9oxLrsVObTLaZpDFv1hN/c/GEyo3SzULdlhqCQl24pYavH/QhrcjPWNbnrVOWxTb0hDXLzSTzJkvWFN7ssUakwl3LOxO5jj3s9Vi347ruAW8k05AxjOWwHJGtZUADZsfkdmBlRT/w9o0U5+vdS0cxanQfiP2HLiAoxCUlkOI8a8/GbBdA/7JDHkH0RV3AReaAL9PdtRztOrGEb9iQFsbUZlR/QlEmz26Z00kXya263oEuKEjuobJE/gyXNCeNicoShqgE4q9fuyBDNX31ra3G9bsgwKSkVlYVSQ79d1PfP0LPy6uM7prMU9oFIkBkPo4RpTgLy1bGKoPEi/AFKRGkJRADmJToe4OIIB+IlFTo+9Aqud/qLs2W/GR8WIMuSF/8wD4Qwbg/Hg34Ic8yDCcOfym/XFtUWBRfMkRBF2Sw/Rk8Pz3+8fz0+Pvz0+Ofz0+Pvz0/Pf7VCvzGr4XzEYU4KYEIlLlwX+WWrK73SUo3miaZoaSEEvjo5z0Xr8KnrrLQNL3jKkG+Z3KKDvfWMp2pgh2E9UhdUSufrpzIx6p09w8gQAShP7wynm0VWt6z5U3fi71t5VoCwzcN6yi7EelBbjhvFlWqr3TVYPMkFKRVfkg6zoCxDoO0Y+wJZbdSZRd7AfpOwcvhXVvNRxfsoR+LTRnbtgrsMBdBlQNrXu3U7WghscFsiau45mad/ojllHOkn6AZHvtXxRoxF0OPThNmS6seJxiLC8qSiI2PxKvz/LBq8FtiXyYmebup8EuYWqfabYDRy+C/WfJfzr3ybvPFPHR/gHi7Sf7tZTimEq4jvE6ljFfHxsJJYDI5RvWqnw3MQJ6QgyHvk4HjRhJ4ePjaBUUCaZCTFIigTE8QdAHJqzatehbkP6mkSJYuheGy7TqBJZU+JmCPU1RSmBZA7Asjge2zQ45/+BuJHZtUNgcAAA==",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "9846562003",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "jinex",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
