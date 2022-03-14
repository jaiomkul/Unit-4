// sorting
function Sort(arr, n , k){
  
    for (i = 0; i<n-1; i++)
    {
      min = i;
      for (j = i+1; j<n; j++)
      {
        if (arr[min] > arr[j])
        {
            min = j; 
        }
        }
        swap(arr,min,i);
      }
      BinarySearch(arr,n, k);
  //     console.log(arr);
  }
  
  // swapping
    function swap(arr,min,i){
         var temp = arr[min];
         arr[min] = arr[i];
         arr[i] = temp;
  }
  
  
  //binarySearch
  function BinarySearch(arr,n, k){
      // console.log(n, k, arr);
      
      var start = 0;
      var end = n-1;
      
      while(start <= end){
         
          var mid = start + Math.floor((end-start)/2);
          
          if(k == arr[mid])
          {
              return console.log(1);
          }
          else if(k < arr[mid])
          {
              end = mid-1;
          }
          else
          {
              start = mid+1;
          }
      }
      return console.log(-1);
      
      
  }
  
  
  
  
  // input taking
  function runProgram(input){
      
      input = input.split('\n');
      var x = input[0].split(" ").map(Number);
      var n = x[0];
      var k = x[1];
      var arr = input[1].split(" ").map(Number);
      // BinarySearch(n, k, arr);
       Sort(arr , n , k);
  }
  
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }