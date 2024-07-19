#include <stdio.h>

// Will take in a matrix and make it so that every other row
// is reversed.
int main() 
{
	// Matrix of two rows, consisting of utmost 5 values
	// current script can account for infinite n of rows
	// as long as array is build accordingly.
	int arr[5][5] = {
		{47,48, 3, 6,43},
		{32,38,16,14,11}
	};

	int i, j, k;

	for (i=0;i<2;i++) {	
		k = i % 2;
		if (k == 0) {
			for (j=0;j<5;j++) {
				printf("%4d", arr[i][j]);
			}

		} else {
			for (j=4;j>=0;j--) {
				printf("%4d", arr[i][j]);
			}

		}
		printf("\n");		
	}
	return 0;

}

