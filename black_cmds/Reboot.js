const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝔹𝕃𝔸ℂ𝕂ℍ𝔸ℂ𝕂𝔼ℝ𝕊-𝕍1 bot Restarting ⏳");

  exec("pm2 restart all");
  

  



})
