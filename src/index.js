
exports.min = function min (array) {

if (array === undefined || array[0] === undefined ) {
        return 0}

let newArr=array.sort(function (prev, next) {
        return prev - next
    });
  return newArr[0];
}



exports.max = function max (array) {

if (array === undefined || array[0] === undefined ) {
        return 0}

let newArr=array.sort(function (prev, next) {
        return prev - next
    });   
      return newArr[newArr.length-1];
}



exports.avg = function avg (array) {

if (array === undefined || array[0] === undefined ) {
        return 0}

let sum=0;
    array.forEach(element => {sum=sum+element 
  });
    let aver=sum/array.length
    return aver;
}
