/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let set2 = new Set(nums2);
    let commonElements = nums1.filter(num => set2.has(num));
    
    return commonElements.length ? Math.min(...commonElements) : -1;
};
