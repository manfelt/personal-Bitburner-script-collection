/** @param {NS} ns */
export async function main(ns) {
	//Use this script to solve the unique paths puzzle

	const uniquePathsIterative = (m, n) => {
	    //Initialize and empty grid with 1 as default value
 	   let dp = new Array(m+1).fill(1).map(x => new Array(n+1).fill(0));
    
	    //Iteate through grid
	    for (let i=1;i<=m;i++) {
	        for (let j=1;j<=n;j++) {
	            //If unique path then update the data in dp cache
  	          if (i==1 && j==1) dp[i][j] = 1;
            
 	           //Else return the result of down and right unique paths
	            else dp[i][j] = dp[i-1][j] + dp[i][j-1];
 	       }
	    }
	
	    //Return the result from end
	    return dp[m][n];
	}
	ns.print(uniquePathsIterative(13,6));
	
}