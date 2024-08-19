function binary(arr,target){
    let low=0
    let high=arr.length-1
    
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]<target){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
   
 }
 
 arr=[5,8,9,12,18,52]
 target=3
 console.log(binary(arr,target))