"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🫀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐀𝐌 𝐀𝐋𝐈𝐕𝐄 𝐌𝐘 𝐅𝐑𝐈𝐄𝐍𝐃.... \n\n\n FORK THE REPO DEPLOY AND ENJOY😊\n\n\n';
    let d = '                                                                           𝐈 𝐋𝐎𝐕𝐄 𝐁𝐋𝐀𝐂𝐊 𝐇𝐀𝐂𝐊𝐄𝐑𝐒 𝐓𝐄𝐀𝐌 😘';
    let varmess = z + d;
    var video = 'https://files.catbox.moe/8yh4xq.jpg';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
