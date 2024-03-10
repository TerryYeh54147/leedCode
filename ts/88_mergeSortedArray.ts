// https://leetcode.com/problems/merge-sorted-array/description/
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m,n, ...nums2);
    nums1.sort((a:number,b:number)=>a-b);
};