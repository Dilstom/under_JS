#include <stdio.h>

// * - from a pointer to a thing
// & - from a thing to a pointer
void add2(int *a)
{
    *a += 2; // whatever you point at 'a'
}
int main(void)
{
    int x = 12;
    add2(&x); // when you have an int or char and you want to have a pointer to that
    printf("%d\n", x);
    return 0;
}