# https://leetcode.com/problems/majority-element/description/
# Boyer–Moore majority vote algorithm
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        vote = 1
        res = nums[0]
        for i in range(1,len(nums)):
            if (nums[i]!=res):
                if (vote>0):
                    vote -= 1
                else:
                    vote=1
                    res = nums[i]
            else:
                vote += 1
        return res