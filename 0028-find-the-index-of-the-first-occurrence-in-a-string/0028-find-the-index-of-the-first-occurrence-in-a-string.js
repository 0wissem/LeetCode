/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const nL = needle.length
    const hL = haystack.length
    if(nL>hL)return -1

    for (let i=0;i<=hL-nL;i++){
        if(haystack.slice(i,nL+i)===needle)return i
    }
    return -1
};