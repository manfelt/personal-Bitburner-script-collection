/** @param {NS} ns */
export async function main(ns) {
  // størrelsen på servere vi skal ha
  let ram = 512;
  let target = "zer0";
  
  // Fortsetter å forsøke å kjøpe servere så lenge vi har råd og tilbud.
  ns.purchaseServer(ram + "GB", ram);
  
  var servers = ns.getPurchasedServers();

  var i = 0;

  while (i < servers.length) {
    if (!ns.isRunning("serverMega.js", servers[i])) {

      ns.scp("serverMega.js", servers[i], "home");
      ns.scp("weaken.js", servers[i], "home");
      ns.scp("grow.js", servers[i], "home");
      ns.scp("hack.js", servers[i], "home");

      ns.exec("serverMega.js", servers[i]); 
    }
    i++
  }

}
