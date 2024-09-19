/** @param {NS} ns */
export async function main(ns) {


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
    'helios', 'vitalife', '.', 'blade', 'fulcrumtech'];


  function findContracts(srlist) {
    let i = 0;
    var contractes = [];
    while (i < srlist.length) {
      let files = ns.ls(srlist[i]);
      if (files.length > 0) {
        for (let j = 0; j > files.length; j++) {
          if (files[j].includes(".cct")) {
            contractes.push(srlist[i]);
          }
        }
      }
      i++;
    }
    return contractes = contractes.length == 0 ? '¯\_(ツ)_/¯' : contractes;
  }


  var contracts = findContracts(srlist);
  ns.printf(contracts);
  await ns.sleep(1000);

}
