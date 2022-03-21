// function timeConversion(s) {
//     // Write your code here
let h1 = Number(s[0] - '0');
let h2 = Number(s[1] - '0');
let hh = (h1*10 + h2%10);
let bag="";

if(s[8]=='A')
{
    if(hh==12){
        bag+='00';
        for(let i=2; i<=7; i++)
        {
            bag+=s[i]
        }
    }
    else{
        for(let i=0; i<=7; i++)
        {
            bag+=s[i]
        }
    }
}
else{
    if(hh==12){
        bag+=12;
        for(let i=2; i<=7; i++)
        {
            bag+=s[i]
        }
    }
    else{
        hh = hh + 12;
        bag+=hh;
        for(let i=2; i<=7; i++)
        {
            bag+=s[i]
        }
    }
}
console.log(bag)
// }
// var s = "07:05:45PM";
// timeConversion(s);

// function twoSum(nums, target) {
// var ans = []
//     for(i=0; i<nums.length; i++)
//         {
//             for(j=0; j<nums.length; i++)
//                 {
//                     if(nums[i]==nums[j])
//                         {
//                             continue;
//                         }
//                     else{
//                         if(nums[i]+nums[j]==target)
//                             {
//                                 ans.push(j,i)
//                             }
//                     }
//                 }
//         }
//     console.log(ans)
// }
//    var nums = [2,7,11,15], target = 9;
//     twoSum(nums, target)

function indexs(arr){
  let  bag=""
    for(i=0; i<arr.length; i++)
    {
        for(j=0; j<arr.length; j++)
        {
            if(arr[i]>arr[j])
            {
                bag+=j+" ";
            }
            else if(arr[i]==arr[j-1] && arr[i]==arr[j+1])
            {
                bag+=j-1+" ";
            }
            else if(arr[i]>arr[j--] || arr[i]<arr[j++])
            {
                bag+= -1+" ";
            }  
        }
    }
    console.log(bag)
}

var arr = [4,8,6,5,3]
indexs(arr)
// Input: 4 8 6 5 3
// Output: 4 0 3 4 -1
