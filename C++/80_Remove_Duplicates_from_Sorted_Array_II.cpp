// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int chk =1;
        for (int i=1;i<nums.size();i++){
            if (chk==1 || nums[i] != nums[chk-2]){
                nums[chk++] = nums[i];
            }
        }
        return chk;
    }
};