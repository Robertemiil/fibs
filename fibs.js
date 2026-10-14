const fibs =(n,arr=[])=>{   
 
  if(arr.length===0)arr.push(0);
  else if(arr.length===1)arr.push(1);
  else if(arr.length>1)arr.push(arr[arr.length-1]+arr[arr.length-2]);

  if(n>1)fibs(n-1,arr)
  return arr;
}



