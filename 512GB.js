/** @param {NS} ns */
export async function main(ns) {
  // størrelsen på servere vi skal ha
  let ram = 512;
  let target = "zer0";
  // Iterator for loop
  // TODO telle antall servere og starte 'i' opp fra siste server #

  // Fortsetter å forsøke å kjøpe servere så lenge vi har råd og tilbud.
  ns.purchaseServer(ram + "GB", ram);
  // TODO gjøre det mulig å scp scriptene til ny server
  // TODO kjøre scriptet på server
  // TOOO dynamisk, slik at det gjelder for flere nye.

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
