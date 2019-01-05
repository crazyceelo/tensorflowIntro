const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const values = [];
for (let i = 0; i < 30; i++) {
  values[i] = Math.floor(Math.random() * 101);
}

const shape = [2, 5, 3];

const tense = tf.tensor3d(values, shape, "int32");

const vtense = tf.variable(tense);
console.log(vtense);
