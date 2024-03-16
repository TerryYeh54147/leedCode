// https://leetcode.com/problems/majority-element/description/
// Boyer–Moore majority vote algorithm
func majorityElement(nums []int) int {
    vote, res := 0, nums[0]
	for _,e:= range nums[1:] {
		if res == e {
			vote++
		} else {
            if vote < 0{
                vote = 0
                res = e
            }else{
                vote--
            }
		}
	}
	return res
}