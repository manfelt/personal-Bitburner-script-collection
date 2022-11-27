/** @param {NS} ns */
export async function main(ns) {
let money = ns.args[0];
	var aksjer = ['ECP','MGCP','BLD','CLRK','OMTK','FSIG','KGI','FLCM','STM','DCOMM',
	'HLS','VITA','ICRS','UNV','AERO','OWN','SLRS','GPH','NVMD','WDS','LXO',
	'RHOC','APHE','SYSC','CTK','NTLK','OMGA','FNS','SGC','JGN','CTYS',
	'MDYN','TITN'];

	let i = 0;

	while (i < aksjer.length) {
		let aksje = aksjer[i];

		ns.run(`aksjer/${aksje}/stonks.js`, 1, money);	
		i++;
		await ns.sleep(1000);
		}
		
	
    
}