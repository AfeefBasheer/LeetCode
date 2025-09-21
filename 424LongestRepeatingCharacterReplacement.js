//Problem - 424
//beats 67% in Time Complexity 
//beats 30% in Space complexity

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let freq = {};
    let count = 0; 
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        freq[char] = (freq[char] || 0) + 1;

        count = Math.max(count, freq[char]);

        while ((right - left + 1) - count > k) {
            freq[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
