const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷  
        𝔹𝕃𝔸ℂ𝕂ℍ𝔸ℂ𝕂𝔼ℝ𝕊-𝕍1  
⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸  
╔════════════════▣  
┊✺┌── ❐ 👑 𝐀𝐃𝐌𝐈𝐍 ❐ ──⊷  
╠✤│👉 ${s.OWNER_NAME}  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 📅 𝐂𝐀𝐋𝐄𝐍𝐃𝐀𝐑 ❐ ──⊷  
╠✤│👉 ${date}  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 🔑 𝐏𝐑𝐄𝐅𝐈𝐗 ❐ ──⊷  
╠✤│👉 ${s.PREFIXE}  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 🤖 𝐁𝐎𝐓 𝐌𝐎𝐃𝐄 ❐ ──⊷  
╠✤│👉 ${mode} mode  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 📦 𝐎𝐑𝐃𝐄𝐑𝐒 ❐ ──⊷  
╠✤│👉 ${cm.length}  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 💾 𝐌𝐄𝐌𝐎𝐑𝐘 ❐ ──⊷  
╠✤│👉 ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 🖥️ 𝐒𝐘𝐒𝐓𝐄𝐌 ❐ ──⊷  
╠✤│👉 ${os.platform()}  
┊✺└────••••────⊷  
╚════════════════▣  
╔════════════════▣  
┊✺┌── ❐ 🎭 𝐓𝐇𝐄𝐌𝐄 ❐ ──⊷  
╠✤│👉 𝔹𝕃𝔸ℂ𝕂ℍ𝔸ℂ𝕂𝔼ℝ𝕊 𝕋ℍ𝔼𝕄𝔼  
┊✺└────••••────⊷  
╚════════════════▣\n`;
    
let menuMsg = `
 ─────────
  *𝕋𝔼𝔸𝕄 𝔹𝕃𝔸ℂ𝕂ℍ𝔸ℂ𝕂𝔼ℝ𝕊 𝔹𝕆𝕋𝕊* 
 ─────────


 *ℂ𝕆𝕄𝕄𝔸ℕ𝔻𝕊*
`;

    for (const cat in coms) {
        menuMsg += ` ╭─⬡ *${cat}* ⬡─`;
        for (const cmd of coms[cat]) {
            menuMsg += `
⬡│▸ *${cmd}*`;
        }
        menuMsg += `
  ╰────────────·· \n`
    }

    menuMsg += `

|⏣𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗟𝗔𝗖𝗞-𝗛𝗔𝗖𝗞𝗘𝗥𝗦-𝗩𝟭
*❒⁠⁠⁠⁠—————————— ❒⁠⁠⁠⁠——————————❒⁠⁠⁠⁠*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *kavishanmd*, déveloper kavishan Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *kavishanmd*, déveloper kavishan Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
