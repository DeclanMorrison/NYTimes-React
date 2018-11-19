const arrayFunctions = {
  replaceSlashes: function(string){
    return string.split("").filter(value => value !== "/").join("");
  }
};

export default arrayFunctions;