const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "sc", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
        🚀 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐋𝐈𝐍𝐊𝐒 🚀  
⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸  
╔════════════════▣
┊✺┌── ❐ 🛰️ 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 ❐ ──⊷
╠✤│👉 https://whatsapp.com/channel/0029VbAhAOJISTkRkIw3Sy1D
┊✺└────••••────⊷
╚════════════════▣
╔════════════════▣
┊✺┌── ❐ ⚡ 𝐆𝐑𝐎𝐔𝐏 ❐ ──⊷
╠✤│👉 https://chat.whatsapp.com/ISlBTSZdlFTKNwdXdB1TZ4?mode=ems_copy_c
┊✺└────••••────⊷
╚════════════════▣
╔════════════════▣
┊✺┌── ❐ 💀 𝐑𝐄𝐏𝐎 ❐ ──⊷
╠✤│👉 https://github.com/mudrickytech-crypto/BLACK-V1-
┊✺└────••••────⊷
╚════════════════▣
⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷  
        ✨ POWERED BY BLACK-HACKERS-V1✓ ✨  
⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸\n─
  `;
    
let menuMsg = `
     > 𝔹𝕃𝔸ℂ𝕂ℍ𝔸ℂ𝕂𝔼ℝ𝕊-𝕍1 BOTS TEAM

❒────────────────────❒`;
    
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *andbad*, déveloper andbad" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
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
