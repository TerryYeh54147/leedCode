// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
function removeDuplicates(nums: number[]): number {
    let idx = 0;
    const chk: Record<number,number> = {};
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in chk)) {
            chk[nums[i]]=1;
            nums[idx++] = nums[i];
        }
    }
    return idx;
};