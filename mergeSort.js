// 912. Sort an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Using JS array manipulations Time O(nlogn) Space O(n)
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    
    let mid = Math.floor(nums.length / 2);
    let leftArr = sortArray(nums.slice(0, mid));
    let rightArr = sortArray(nums.slice(mid));
    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr){
    let i = 0;
    let j = 0;
    let res = [];

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            res.push(leftArr[i]);
            i++;
        }else{
            res.push(rightArr[j]);
            j++;
        }
    }

    return [...res, ...leftArr.slice(i), ...rightArr.slice(j)];
}

//using index manipulation Time O(nlogn) Space O(n)
var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
}

function mergeSort(arr, low, high){
    if(low >= high) return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high){
    let leftArr = arr.slice(low, mid + 1);
    let rightArr = arr.slice(mid + 1, high + 1);

    let i = 0;
    let j = 0;
    let k = low;

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            arr[k++] = leftArr[i++];
        }else{
            arr[k++] = rightArr[j++];
        }
    }

    while(i < leftArr.length){
        arr[k++] = leftArr[i++];
    }

    while(j < rightArr.length){
        arr[k++] = rightArr[j++];
    }
}
