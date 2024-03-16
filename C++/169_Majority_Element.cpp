// https://leetcode.com/problems/majority-element/description/
// Boyer–Moore majority vote algorithm
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int vote=0;
        int res;
        for(auto n:nums){
            if (vote==0){
                res=n;
            }
            vote += (n==res)?1:-1;
        }
        return res;
    }
};