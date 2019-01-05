const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const values = [];
for (let i = 0; i < 15; i++) {
  values[i] = Math.floor(Math.random() * 101);
}

const shape = [5, 3];

const a = tf.tensor3d(values, shape, "int32");
const b = tf.tensor3d(values, shape, "int32");
const bb = b.transpose(); // turns shape into [3,5]

const sum = a.matMul(bb);
sum.print();
