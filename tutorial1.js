const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const firstTensor = tf.tensor([1, 2, 3, 4, 5]);
console.log(firstTensor.toString());

const tensoreWithShape = tf.tensor([1, 2, 3, 4], [2, 2]).print();

const twoByTwoByTwo = tf
  .tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2], "int32")
  .print();

const values = [];
for (let i = 0; i < 30; i++) {
  values[i] = Math.floor(Math.random() * 101);
}

const shape = [2, 5, 3];
const data = tf.tensor(values, shape);

// console.log(data.toString());
// console.log(data);

const threeD = tf.tensor3d(values, shape, "int32");

console.log(threeD.toString());

// these two below are the same
// use dataSync() instead
threeD.data().then(stuff => {
  console.log(stuff);
});

console.log(threeD.dataSync());
