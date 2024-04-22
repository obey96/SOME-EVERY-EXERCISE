// hasOddNumber

const hasOddNumber = ([1,2,2,2,2,2,4]) 

const hasOddNumber2 =([2,2,2,2,2,4])

function oddValue(arr){

return arr.some(function(value){

return value % 2!== 0;

});
}


const hasOddNumber1 = oddValue(hasOddNumber);
const hasOddNumber3 = oddValue(hasOddNumber2);

// checking odd numbers
console.log(hasOddNumber1);
console.log(hasOddNumber3);

// hasAZero

 const jasZero = (33321232131012)
 const notZero  = (1212121)


 function hasZero(num){

return num.toString().includes('0');

 };

 const funZero = hasZero(jasZero);
 const funNotZero = hasZero(notZero);

console.log(funNotZero);
 console.log(funZero);


//  hasOnlyOddNumbers

const hasOnlyOddNumbers1 = ([1,3,5,7])
   const hasOnlyOddNumbers2 = ([1,2,3,5,7])
   
   function onlyOdd (num){
return num.every(function(value){

    return value % 2!== 0;

});

   }

   const oddFun = onlyOdd(hasOnlyOddNumbers1);
   console.log(oddFun);

   const notOddFun = onlyOdd(hasOnlyOddNumbers2);
   console.log(notOddFun);


   
// hasNoDuplicates

const hasDuplicates = ([1,2,3,1])
 const hasNoDuplicates = ([1,2,3])

function hasDub(arr){
return arr.every((element,index)=> arr.indexOf(element) === index);

}

const hasDupli =hasDub(hasDuplicates);
const doNotDupli = hasDub(hasNoDuplicates);
 console.log(hasDupli);
 console.log(doNotDupli);


//  hasCertainKey

const hasCertainKey =[
   {title: "Instructor", first: 'Elie', last:"Schoppik"},
   {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
   {title: "Instructor", first: 'Matt', last:"Lane"},
   {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
 ]



 function hasKey(arr,key){

return arr.every(obj => obj.hasOwnProperty(key));

 } 
const keyFirst = hasKey(hasCertainKey,'first');

 console.log(keyFirst);

 const negativeKey = hasKey(hasCertainKey,'isCatOwner');

 console.log(negativeKey);

//  hasCertainValue


const hasValue = [
   {title: "Instructor", first: 'Elie', last:"Schoppik"},
   {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
   {title: "Instructor", first: 'Matt', last:"Lane"},
   {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
 ]
function keyValue(arr,key,search){

return arr.every(function(val){
   return val[key] === search;
})


}
const keyValueApp = keyValue(hasValue,'title','Instructor');
console.log(keyValueApp);

const falseKeyValue = keyValue(hasValue,'first','Elie');
console.log(falseKeyValue);