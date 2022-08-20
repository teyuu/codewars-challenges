                                                    /*DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

//refactor
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
} 

//first soluction

/*function countSheeps(arrayOfSheep) {
    if(typeof arrayOfSheep !== null || typeof arrayOfSheep !== 'undefined'){
      let result = arrayOfSheep.filter(e => e === true);
      return result.length
    }else{
      return nll
    }
}/*

//beter solution
// return arrayOfSheep.filter(Boolean).length;*/
