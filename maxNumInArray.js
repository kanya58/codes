const fun = (arr) =>{
    const arrObj = {};
       arr.forEach(element => {
            if(arrObj.hasOwnProperty(element)){
                arrObj[`${element}`]=arrObj[`${element}`]+1
            }else{
            arrObj[`${element}`]=1
            }
       });

    //    for(let num in arrObj) {
    //        if(arrObj[num] > 1) {
    //            console.log(num + 'is ' + arrObj[num] + 'times')
    //        }
    //    }
    for(const item in arrObj){
        if(arrObj[item] == Math.max.apply(null,Object.values(arrObj))){
            return {"Value":item , "Occurence":`${arrObj[item]} times`}
        }
    }
    //    console()

    //    .find(item=> item == Math.max.apply(null,Object.values(arrObj)))
    }
   console.log("Maximum Times Occured number: ",fun([644444,44,4,4,4,4,4,4,4,4,4,4,4,4,44,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))
