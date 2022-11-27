/** @param {NS} ns */
export async function main(ns) {
	let money = ns.args[0];
	let sym = 'SLRS';
while(true) {	
	let cast = ns.stock.getForecast(sym);
	let stonks = (money/ns.stock.getAskPrice(sym));
	while (cast>0.6) {
		ns.stock.buyStock(sym, stonks);
		while (ns.stock.getForecast(sym)>0.6) {
			ns.print(ns.stock.getForecast(sym));
			await ns.sleep(5000);
		}
		break;
	}

	let [shares, avgPx, sharesShort, avgPxShort] = ns.stock.getPosition(sym);
	
	 if (shares >0) {	 
		 ns.stock.sellStock(sym, shares);
		 ns.print('sold for profits:');
		 ns.print(ns.stock.getSaleGain(sym,stonks,"Long"));
	 }
	await  ns.sleep(5000);
}

	let profit = ns.stock.getSaleGain(sym,500,"Long");
	let ask = ns.stock.getAskPrice(sym);


	ns.print('asking:');
	ns.print(ask);
	ns.print('forecast:');
	ns.print(cast);
	ns.print('profits:');
	ns.print(profit);
}