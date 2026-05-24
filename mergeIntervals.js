// 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//sorting Time O(nlogn) Space O(1) excluding res output
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let left = intervals[0];

    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= left[1]){
            left[1] = Math.max(left[1], intervals[i][1]);
        }else{
            res.push(left);
            left = intervals[i];
        }
    }

    res.push(left);
    return res;
};
