module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if(bracketsConfig[j][0] == arr[i] && bracketsConfig[j][1] == arr[i+1]){
          arr.splice(i,2);
          i = 0;
          j = -1;
        }      
      }    
    }
    return arr.length === 0;
}
