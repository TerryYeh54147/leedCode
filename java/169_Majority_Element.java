// https://leetcode.com/problems/majority-element/description/
// Boyer–Moore majority vote algorithm
class Solution {
    public int majorityElement(int[] nums) {
        int vote = 1;
        int res = nums[0];
        for (int i=1;i<nums.length;i++){
            if (nums[i]!=res){
                if (vote>0){
                    vote--;
                }else{
                    vote=1;
                    res = nums[i];
                }
            }else{
                vote++;
            }
        }
        return res;
    }
}