/** @param {NS} ns */
export async function main(ns) {
		let target = ns.args[0];
		while (true) {
			while(ns.getServerSecurityLevel(target)<(ns.getServerMinSecurityLevel(target)*1.50)) {
				while(ns.getServerMoneyAvailable(target)<ns.getServerMaxMoney(target)*0.75) {
					await ns.grow(target);
			}
			await ns.hack(target);
		}
		await ns.weaken(target);
	}
}