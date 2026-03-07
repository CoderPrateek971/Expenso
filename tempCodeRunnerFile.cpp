#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
struct process{
    int pId;
    int aT;
    int  bT;
    int cT;
    int tAt;
    int wT;
};
bool compare(process a,process b){
    return a.aT<b.aT;
}
int main()
{
    int n;
    cout<<"enter number of process: "<<endl;
    cin>>n;
    vector<process>p(n);
    for(int i=0;i<n;i++){
        p[i].pId=i+1;
        cout<<"\nprocess "<<i+1<<"arrival time: ";
        cin>>p[i].aT;
        cout<<"\nprocess "<<i+1<<"burst time: ";
        cin>>p[i].bT;
    }
    sort(p.begin(),p.end(),compare);
int currentTime=0;
for(int i=0;i<n;i++){
    if(currentTime<p[i].aT){
        currentTime=p[i].aT;
    }
    p[i].cT=currentTime+p[i].bT;
    p[i].tAt=p[i].cT-p[i].aT;
    p[i].wT=p[i].tAt-p[i].bT;
    currentTime=p[i].cT;
}
cout<<"\tpId\a\tbT\tcT\ttAt\twT\n";
float turnAround=0,totalwt=0;
for(int i=0;i<n;i++){
    cout<<p[i].aT<<"\t"<<p[i].aT<<"\t"<<p[i].bT<<"\t"<<p[i].cT<<"\t"<<p[i].tAt<<"\t"<<p[i].wT<<"\t\n";

turnAround+=p[i].tAt;
totalwt+=p[i].wT;
}
cout<<"averge TAT:"<<turnAround/n;
cout<<"average WT:"<<totalwt/n;
return 0;
}