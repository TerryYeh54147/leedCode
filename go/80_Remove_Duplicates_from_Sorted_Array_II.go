// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
func removeDuplicates(nums []int) int {
    chk := 1;
    for i:=1;i<len(nums);i++{
        if chk == 1 || nums[i] != nums[chk-2] {
            nums[chk] = nums[i];
            chk++;
        }
    }
    return chk;
}