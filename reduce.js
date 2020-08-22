/*
function called extractValue  accepts an array of objects and a key and returns a new array with the value of each object at the key.

*/

function extractValue(arr, key) {
    let newArr = []
    return arr.reduce(function(values,nextValue){
         values.push(nextValue[key])
         return values;
    },[])
}



/*
function called vowelCount accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function is case insensitive so a lowercase letter and uppercase letter will count

*/

function vowelCount(str) {
    let vows = 'aeiou';
        return str.split('').reduce(function(value, nextValue) {
         let newValue = nextValue.toLowerCase();
         if(vows.indexOf(newValue) !== -1) {
             if(value[nextValue]) {
                 value[nextValue] ++;
             }else {
                 value[nextValue] = 1;
             }
         }
         return value;
    },{})
}

/*
 function called addKeyAndValue accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(val, nextValue,i){
            val[i][key] = value;
            return val;
    },arr)

}

/*
 function called partition accepts an array and a callback and returns an array with two arrays inside of it. The partition function  run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value will be placed in the first subarray. If the result of the callback function at that specific value is false, the value will be placed in the second subarray. 

*/

function partition(arr, callback) {
    return arr.reduce(function(value,nextValue){
        if(callback(nextValue)){
            value[0].push(nextValue);
        } else {
            value[1].push(nextValue);
        }
        return value;
    }, [[],[]]);
}
