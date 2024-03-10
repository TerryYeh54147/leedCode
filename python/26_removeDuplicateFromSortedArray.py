# https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        chk = {}
        idx = 0
        for i in range(len(nums)):
            if (not nums[i] in chk):
                chk[nums[i]]=1
                nums[idx] = nums[i]
                idx += 1
        return idx