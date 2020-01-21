// const arr = ["a", "b", "c", "d"];

// const res = arr.reduceRight((prevResult, value) => {
//   console.log(
//     `prevResult=${prevResult}`,
//     `value=${value}`,
//     `wil result=${prevResult + value}`
//   );
//   return prevResult + value;
// });
// console.log("res", res);

const compose = (...funcs) => comp => {
  return funcs.reduceRight((prevRes, fn) => {
    return fn(prevRes);
  }, comp);
};
