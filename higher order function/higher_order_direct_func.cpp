#include<bits/stdc++.h>
#include<cmath>
#define _USE_MATH_DEFINES
#include <math.h>
using namespace std;


vector<double>calculate(vector<int> radius,double (*logic)(int k)){
    vector<double>area;
    for(auto item:radius){
        area.push_back(logic(item));
    }
    return area;
}

int main(){
   
   vector<int> radius={42,6,8,19,4};
   vector<double> ans=calculate(radius, *[](int k){return M_PI*k*k;});

   /*
    #define _USE_MATH_DEFINES
    #include<cmath>
   */
   for(auto item:ans){
    cout<<item<< '\t'; 
   }
    cout<<endl;

  return 0;
}
