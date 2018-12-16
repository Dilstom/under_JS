#include <stdio.h>
// Pointer arithmetic version

void printstring(char *p)
{
    printf('%c\n', *p);
}

int main(void)
{
    char *s = 'Hello, world!';
    // printf('%c\n', *s); // 'H'
    // printf('%p\n', s);  // address
    // printf('%s\n', s);  // 'Hello, world!'
    printstring(s);

    return 0;
}

void printstring(char *p)
{
    for (int i = 0; *(p + i) != 0; i++)
    {
        printf("%c", *(p + i));
    }
    printf("\n");
}
// Array notation version
void printstring2(char p[])
{
    // In C, these two lines are equivalent:
    //
    // *(p+i) = 12;
    // p[i] = 12;
    for (int i = 0; p[i] != 0; i++)
    {
        printf("%c", p[i]);
    }
    printf("\n");
}
// Pointer arithmetic version 2
void printstring3(char *p)
{
    for (; *p != '\0'; p++)
    {
        printf("%c", *p);
    }
    printf("\n");
}
int main(void)
{
    char *s = "Hello, world!";
    //printf("%c\n", *s);  // H
    //printf("%p\n", s); // the address
    //printf("%s\n", s); // "Hello, world!"
    printstring(s);
    printstring2(s);
    printstring3(s);
    return 0;
}
