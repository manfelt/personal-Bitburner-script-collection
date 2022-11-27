/** @param {NS} ns */
export async function main(ns) {

 var srlist = ['johnson-ortho','computek','crush-fitness','syscore','galactic-cyber','snap-fitness', 'aerocorp','deltaone','univ-energy',
'infocomm','zeus-med','taiyang-digital','applied-energetics','kuai-gong', 'icarus', 'defcomm','zb-def','omnitek','4sigma','stormtech',
'megacorp','ecorp','The-Cave','nwo','fulcrumassets','nova-med','clarkinc', 'b-and-a', 'powerhouse-fitness'];
	let i = 0;

	while (i < srlist.length) {
		let tar = srlist[i];
		let hacklvl = ns.getServerRequiredHackingLevel(tar);

		if ((ns.hasRootAccess(tar) == false)&(hacklvl<ns.getHackingLevel())) {


			let p = 0;
			let porter = ns.getServerNumPortsRequired(tar);

			if (ns.fileExists("BruteSSH.exe")&(porter>0)) {
    			ns.brutessh(tar);
				p++;
			}
			if (ns.fileExists("FTPCrack.exe")&(porter>1)) {
    			ns.ftpcrack(tar);
				p++;
			}
			if (ns.fileExists("relaySMTP.exe")&(porter>2)) {
    			ns.relaysmtp(tar);
				p++;
			}
			if (ns.fileExists("HTTPWorm.exe")&(porter>3)) {
    			ns.httpworm(tar);
				p++;
			} 
			if (ns.fileExists("SQLInject.exe")&(porter>4)) {
    			ns.sqlinject(tar);
				p++;
			}
			if (p >= porter) {
				ns.nuke(tar);
			}
		
		}
		if (!ns.isRunning("alt-superscript.js", ns.getHostname(), tar)&(ns.hasRootAccess(tar))) {
				var treds = 1000;
				ns.run("alt-superscript.js", treds, tar);
			}
				await ns.sleep(1000);
    i++;
		}	

}

/* 	var target = 'foodnstuff';


	let ram = ns.getServerRam(target);
	let files = Math.floor(ram[0]/3);

	while(files>0) {
		files--;
		ns.run(`s${files}.js -t 1 ${target}`);
	} */