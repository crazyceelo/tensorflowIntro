const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

// build and compile model
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
// model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

// // Generate some synthetic data for training
// const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
// const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

// // train model with fit()
// model.fit(xs, ys, { epochs: 1000 });

// // run inference with predict()
// model.predict(tf.tensor2d([[5]], [1, 1])).print();

const myInput = tf.input({ shape: [2, 4] });
const flatten = tf.layers.flatten();

console.log(flatten.apply(myInput).shape);
