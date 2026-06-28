//496. Next Greater Element I

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Brute force Time O(n²) Space: O(n)
var nextGreaterElement = function(nums1, nums2) {
   let nextGreaterArr = new Array(nums2.length).fill(-1); 
   let ans = [];

   for(let i = 0; i < nums2.length - 1; i++){
    for(let j = i + 1; j < nums2.length; j++){
        if(nums2[j] > nums2[i]){
            nextGreaterArr[i] = nums2[j];
            break;
        }
    }
   }

   for(let i = 0; i < nums1.length; i++){
    let index = nums2.indexOf(nums1[i]);
    if(index !== -1){
        ans[i] = nextGreaterArr[index];
    }
   }

   return ans;
};

//better soltuin using hasmap to store index (avoid indeOf loop)
var nextGreaterElement = function(nums1, nums2) {
   let nextGreaterArr = new Array(nums2.length).fill(-1); 
   let ans = [];
   let map = new Map();

   for(let i = 0; i < nums2.length; i++){
    map.set(nums2[i], i);

    for(let j = i + 1; j < nums2.length; j++){
        if(nums2[j] > nums2[i]){
            nextGreaterArr[i] = nums2[j];
            break;
        }
    }
   }

   for(let i = 0; i < nums1.length; i++){
    let index = map.get(nums1[i]);
    ans[i] = nextGreaterArr[index];
   }

   return ans;
};

//Optimal monotonic stack- Time O(n + m) Space O(n + m) 
var nextGreaterElement = function(nums1, nums2) {
   let stack = [];
   let map = new Map();
   let ans = [];

   for(let i = 0; i < nums2.length; i++){
    while(stack.length && stack.at(-1) < nums2[i]){
        let top = stack.pop();
        map.set(top, nums2[i]);
    }

    stack.push(nums2[i]);
   }

   for(let i = 0; i < nums1.length; i++){
    ans[i] = map.get(nums1[i]) ?? -1;
   }

   return ans;
};

//Another solution using stack- process nums2 in reverse
var nextGreaterElement = function(nums1, nums2) {
   let stack = [];
   let map = {};
   let res = [];

   for(let i = nums2.length - 1; i >= 0; i--){
        while(stack.length){
            if(stack[stack.length - 1] < nums2[i]){
                stack.pop();
            }else{
                map[nums2[i]] = stack[stack.length - 1];
                break;
            }
        }
        if(!stack.length){
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
   }

   for(let num of nums1){
    res.push(map[num]);
   }

   return res;
};
