/** @param {NS} ns */
export async function main(ns) {
	let target = ns.args[0];
	while(ns.getServerMoneyAvailable(target)<(ns.getServerMaxMoney(target))*0.80) {
		await ns.grow(target);
	}	
}