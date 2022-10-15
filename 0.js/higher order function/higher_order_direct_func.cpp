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
   vector<double> ans_area=calculate(radius, *[](int k){return 3.1415926*k*k;});
   vector<double> ans_circumference=calculate(radius, *[](int k){return 3.1415926*2*k;});
   vector<double> ans_diameter=calculate(radius, *[](int k){return 2.0*k;});

   /*
    #define _USE_MATH_DEFINES
    #include<cmath>
   */
   for(auto item:ans_area){
    cout<<item<< '\t'; 
   }
    cout<<endl;
   for(auto item:ans_circumference){
    cout<<item<< '\t'; 
   }
    cout<<endl;
   for(auto item:ans_diameter){
    cout<<item<< '\t'; 
   }
    cout<<endl;

  return 0;
}
