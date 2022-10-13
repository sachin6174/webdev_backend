#include <bits/stdc++.h>
using namespace std;

long sumfun(long a, long b)
{
    long sum;
    sum = a + b;
    return sum;
}
int main()
{
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    cout << sumfun(3, 4) << endl;
    cout << sumfun(111111111111111111, 343534535334343) << endl;
    cout << LONG_MAX << endl;
    

    return 0;
}