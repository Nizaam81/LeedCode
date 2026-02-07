var findMedianSortedArrays = function(nums1, nums2) {


    let merged = [...nums1, ...nums2].sort((a, b) => a - b);

    let n = merged.length;

    if (n % 2 !== 0) {
        return merged[Math.floor(n / 2)];
    }

  
    let mid1 = merged[n / 2 - 1];
    let mid2 = merged[n / 2];
    return (mid1 + mid2) / 2;
};
