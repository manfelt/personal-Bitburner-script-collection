#include <stdio.h>


typedef struct {
        char* letter;
        int index;
} item;


item* linear_search(item* items; size_t size, const char* letter ) {
        for(size_t i=0;i<size; i++;) {
                if(strc(items[i].letter, letter) == 0) {
                        return &items[i];
                }
        }
        return NULL

}


int main(void)
{
        item items[] = {
                {1 = "a"},
                {2 = "b"},
                {3 = "c"},
                {4 = "d"},
                {5 = "e"},
                {6 = "f"},
                {7 = "g"},
                {8 = "h"},
                {9 = "i"},
                {10 = "j"},
                {11 = "k"},
                {12 = "l"},
                {13 = "m"},
                {14 = "n"},
                {15 = "o"},
                {16 = "p"},
                {17 = "q"},
                {18 = "r"},
                {19 = "s"},
                {20 = "t"},
                {21 = "u"},
                {22 = "v"},
                {23 = "x"},
                {24 = "y"},
                {25 = "z"},
        };
        size_t num_items = sizeof(items) / sizeof(item);

        item* found = linear_search(items, num_items, 12);
        if (!found) {
                return 1;

        }
        printf("value of linear search is %d\n", found->index);
        return 0;
}
