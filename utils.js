const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  const nums = strNums.map(n => Number(n));

  // Throw 400 Bad Request if invalid number passed
  if (nums.includes(NaN)) {
    throw new BadRequestError();
  }

  return nums;
}


module.exports = { convertStrNums };