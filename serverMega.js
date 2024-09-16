/** @param {NS} ns */
export async function main(ns) {

  var localMachine = ns.getHostname();

  // Every server ever
  var srlist = ['run4theh111z', 'n00dles', 'foodnstuff', 'sigma-cosmetics',
    'joesguns', 'hong-fang-tea', 'harakiri-sushi', 'iron-gym', 'zer0', 'max-hardware', 'nectar-net',
    'CSEC', 'neo-net', 'silver-helix', 'phantasy', 'omega-net', 'the-hub',
    'netlink', 'avmnite-02h', 'titan-labs', 'johnson-ortho', 'computek', 'crush-fitness', 'syscore', 'galactic-cyber', 'snap-fitness', 'aerocorp', 'deltaone', 'univ-energy',
    'infocomm', 'zeus-med', 'taiyang-digital', 'applied-energetics', 'kuai-gong', 'icarus', 'defcomm', 'zb-def', 'omnitek', '4sigma', 'stormtech',
    'megacorp', 'ecorp', 'The-Cave', 'nwo', 'fulcrumassets', 'nova-med', 'clarkinc', 'b-and-a', 'powerhouse-fitness',
    'zb-institute', 'catalyst', 'I.I.I.I', 'rothman-uni', 'univ-energy',
    'summit-uni', 'aevum-police', 'rho-construction', 'millenium-fitness',
    'lexo-corp', 'solaris', 'alpha-ent', 'omnia', 'unitalife', 'global-pharm', 'microdyne',
    'helios', 'vitalife', '.', 'blade', 'fulcrumtech']


  function getAvailableSrv(srlist) {
    let i = 0;
    var available = [];
    while (i < srlist.length) {
      let tar = srlist[i];
      let hacklvl = ns.getServerRequiredHackingLevel(tar);
      if ((ns.hasRootAccess(tar) == false) & (hacklvl < ns.getHackingLevel())) {
        let p = 0;
        let porter = ns.getServerNumPortsRequired(tar);

        if (ns.fileExists("BruteSSH.exe") & (porter > 0)) {
          ns.brutessh(tar);
          p++;
        }
        if (ns.fileExists("FTPCrack.exe") & (porter > 1)) {
          ns.ftpcrack(tar);
          p++;
        }
        if (ns.fileExists("relaySMTP.exe") & (porter > 2)) {
          ns.relaysmtp(tar);
          p++;
        }
        if (ns.fileExists("HTTPWorm.exe") & (porter > 3)) {
          ns.httpworm(tar);
          p++;
        }
        if (ns.fileExists("SQLInject.exe") & (porter > 4)) {
          ns.sqlinject(tar);
          p++;
        }
        if (p >= porter) {
          ns.nuke(tar);
        }
      }
      if (ns.hasRootAccess(tar)) {
        available.push(tar);
      }
      //await ns.sleep(1000);
      i++;
    }
    return available;
  }



  // Return server with max money.
  function findBank() {
    let i = 0;
    let bank = "n00dles";
    while (i < available.length) {
      if (ns.getServerMaxMoney(bank) < ns.getServerMaxMoney(available[i])) {
        bank = available[i];
      }
      i++;
    }
    return bank;
  }


  // Max threads for kjøring
  function getTreds(machine) {
    let maxRam = ns.getServerMaxRam(machine);
    if (!isNaN(maxRam)) {
      // sett nummer litt under det antallet RAM scriptene bruker
      var treds = Math.floor(maxRam / 1.80);
    }
    return treds;
  }

  // Trenger vi denne?
  function terminate(script, host, arg) {
    if (script != "unset") {
      ns.kill(script, host, arg);
    }

  }

  var available = getAvailableSrv(srlist);
  var bank = findBank(available);
  var treds = getTreds(localMachine);
  var curScript = "unset";


  // TODO dynamisk endre target etter hacking lvl
  
  while (true) {
    while (ns.getServerSecurityLevel(bank) < (ns.getServerMinSecurityLevel(bank) * 1.35)) {
      while (ns.getServerMoneyAvailable(bank) < ns.getServerMaxMoney(bank) * 0.85) {
        if (curScript != "grow.js") {
          terminate(curScript, localMachine, bank);
          curScript = "grow.js";
        }
          await ns.run(curScript, treds, bank);
          await ns.sleep(6000);
      }
      if (curScript != "hack.js") {
        terminate(curScript, localMachine, bank);
        curScript = "hack.js";
      }
        await ns.run(curScript, treds, bank);
        await ns.sleep(6000);
      
    }
    if (curScript != "weaken.js") {
      terminate(curScript, localMachine, bank);
      curScript = "weaken.js";
    }
      await ns.run(curScript, treds, bank);
      await ns.sleep(6000);
    

    await ns.sleep(500)
  }


  //await ns.sleep(500)
}