/** Sjekker først om pengene tilgjengelig på serveren er under 75%, mens det er sant, sjekk sikkerheten, at den ikke er større enn 20% av minimum
 * gror pengene om ikke dette er sant, og er pengene over 75% av maks, hack serveren.
 */
export async function main(ns) {
	var target = 'silver-helix';
	while (getServerMoneyAvailable(target)<(getServerMaxMoney(target)*0.75)) {
		while (getServerSecurityLevel(target)>getServerMinSecurityLevel(target)*1.2) {
			await ns.weaken(target);
		}
		await ns.grow(target);
	}
	hack(target);

}