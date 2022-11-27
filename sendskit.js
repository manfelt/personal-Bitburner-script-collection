/** @param {NS} ns */
export async function main(ns) {

	var srlist = ['run4theh111z','n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','harakiri-sushi','iron-gym','zer0','max-hardware','nectar-net',
'CSEC','neo-net','silver-helix','phantasy','omega-net','the-hub',
'netlink','avmnite-02h', 'titan-labs',
'zb-institute','catalyst','I.I.I.I','rothman-uni','univ-energy',
'summit-uni','aevum-police','rho-construction','millenium-fitness',
'lexo-corp','solaris','alpha-ent','omnia','unitalife','global-pharm','microdyne',
'helios','vitalife','.','blade','fulcrumtech'];

 var shitUtenRam = ['johnson-ortho','computek','crush-fitness','syscore','galactic-cyber','snap-fitness', 'aerocorp','deltaone','univ-energy',
'infocomm','zeus-med','taiyang-digital','applied-energetics','kuai-gong',
'megacorp','The-Cave','nwo','fulcrumassets','nova-med'];
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
		if (!ns.fileExists("alt-superscript.js", tar)||!ns.isRunning("alt-superscript.js", tar)&(ns.hasRootAccess(tar))) {
			let maxRam = ns.getServerMaxRam(tar);
			if (!isNaN(maxRam)) {
				let treds = Math.floor(maxRam/2.47);
				ns.scp("alt-superscript.js", tar);
				ns.exec("alt-superscript.js", tar, treds, tar);
			}
		}	
	await ns.sleep(1000);
    i++;
}

/* 	var target = 'foodnstuff';


	let ram = ns.getServerRam(target);
	let files = Math.floor(ram[0]/3);

	while(files>0) {
		files--;
		ns.run(`s${files}.js -t 1 ${target}`);
	} */
}