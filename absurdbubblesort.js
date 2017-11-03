const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function(res) {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  //keep going until end of array
  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        // i = 0;
      }
      innerBubbleSortLoop(arr, i+=1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallBack) {
  function outerBubbleSortLoop(madeAnySwaps) {
    console.log('HERE');
    if (madeAnySwaps) {
      console.log(`Made a swap ${arr}`);
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      console.log(`Didnt swap ${arr}`);
      sortCompletionCallBack();
    }
  }

  outerBubbleSortLoop(true);
}


absurdBubbleSort([3,5,1], function(arr) {
  console.log(`HERE!!! ${arr}`);
  reader.close();
});

// askIfGreaterThan(5, 19, function(bool) {
//   console.log(bool);
//   reader.close();
//
// });
