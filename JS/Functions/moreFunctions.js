// IS SHORTS WEATHER
function isShortsWeather(temp) {
    return temp >= 75;
  }

isShortsWeather(80); //true
isShortsWeather(48); //false
isShortsWeather(75); //true


// LAST ELEMENT OF ARRAY
function lastElement(arr) {
  if (arr.length) {
    return arr[arr.length-1];
  }
  return null;
}

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null


// CAPITALISE FIRST LETTER OF STRING
function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

capitalize('howard'); //Howard


// SUM OF ARRAY
function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i ++) {
    sum += arr[i];
  }
  return sum;
}

sumArray([3,4,5]); // 12


// DAYS OF THE WEEK
function returnDay(num) {
  let Week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const day = Week[num-1];
  if (num >= 1 && num <= 7) {
   return day;
  } else {
    return null;
  }
}


function gpt(day) {
  const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  if (day < 1 || day > 7) {
  return null;
} else {
  return week[day - 1];
}
}
  
function colt(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const day = days[num-1];
    return day? day : null;
}