// https://leetcode.com/problems/majority-element/description/
// Boyer–Moore majority vote algorithm
function majorityElement(nums: number[]): number {
    let res = nums[0];
    let vote = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== res) {
            if (vote > 0) {
                vote--;
            } else {
                res = nums[i];
                vote = 1;
            }
        } else{
            vote++;
        }
    }
    return res;
};