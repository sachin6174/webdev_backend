#include <bits/stdc++.h>
using namespace std;

string sum(string num1, string num2)
{
    int max_size = max(num1.size(), num2.size());
    vector<int> n1(max_size, 0);
    vector<int> n2(max_size, 0);
    int index_num1 = num1.size() - 1;
    int index_num2 = num2.size() - 1;

    for (int i = max_size - 1; i >= 0; i--)
    {
        if (index_num1 >= 0)
        {
            n1[i] = num1[index_num1--] - '0';
        }
        if (index_num2 >= 0)
        {
            n2[i] = num2[index_num2--] - '0';
        }
    }

    vector<int> result;
    int carry = 0;
    for (int i = n1.size() - 1; i >= 0; i--)
    {
        int sum = n1[i] + n2[i] + carry;
        result.push_back(sum % 10);
        carry = sum / 10;
    }

    if (carry > 0)
    {
        result.push_back(carry);
    }

    reverse(result.begin(), result.end());

    string answer;

    for (auto &item : result)
    {
        answer.push_back(item + '0');
    }

    return answer;
}

int main()
{
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    string num1;
    cin >> num1;
    string num2;
    cin >> num2;
    cout << sum(num1, num2);
    return 0;
}