/** @param {NS} ns */
export async function main(ns) {
  let target = ns.args[0];
  while(true) {
      await ns.hack(target);
      await ns.sleep(500);
  }
}