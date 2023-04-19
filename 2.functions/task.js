function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2);
  return { min, max, avg };
}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}




function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    const currentArr = arrOfArr[i];
    const currentResult = func(...currentArr);

    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }

  return maxWorkerResult;
}
