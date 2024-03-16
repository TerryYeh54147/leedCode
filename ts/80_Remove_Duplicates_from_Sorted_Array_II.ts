// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
function removeDuplicatesII(nums: number[]): number {
    const chk: Record<string, number> = {};
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in chk)) {
            chk[nums[i]] = 1;
            nums[idx++] = nums[i];
        } else if (chk[nums[i]] >= 2) {
            continue;
        } else {
            chk[nums[i]] += 1;
            nums[idx++] = nums[i];
        }
    }
    return idx;
};