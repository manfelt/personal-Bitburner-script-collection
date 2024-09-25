/* Algorithmic Stock Trader I
 *
 *
 * You are given the following array of stock prices (which are numbers) where the i-th element represents the stock price on day i:
 *
 * 63,52,109,116,12,138,84,192,129,108,174,196,160,12,113,83,175,120,90,84,180,135,142,143,76,115,24,183
 *
 * Determine the maximum possible profit you can earn using at most one transaction (i.e. you can only buy and sell the stock once). If no profit can be made then the answer should be 0. Note that you have to buy the stock before you can sell it.  */


#include <stdio.h>

int stocks[] = { 63,52,109,116,12,138,84,192,129,108,174,196,160,12,113,83,175,120,90,84,180,135,142,143,76,115,24,183 };

int arr_length(int arr[])
{
    int i;
    int count = 0;
    for(i=0; arr[i]!='\0'; i++)
    {
        count++;
    }
    return count;
}

int algo1(int arr[]) 
{
	int i, n, high, low, margin;

	low = margin = n = 0;
	high = 1;

	int length = arr_length(arr); 
	
	for (i = 0; i < length; i++)
		if (arr[i] < high)
			high = arr[i];
		if (arr[i] > low)
			low = arr[i];
		n = high - low;
		if (n > margin)
			margin = n;
		
		
		return margin;
	
}

int main() 
{
	
	printf("results: %d", algo1(stocks));

	return 0;
}
