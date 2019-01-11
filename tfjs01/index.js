import * as tf from "@tensorflow/tfjs";
import "bootstrap/dist/css/bootstrap.css";

document.getElementById("output").innerText = "hello world";

// this is called linear regression
// y = 2x - 1
// y = mx + b

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

model.fit(xs, ys, { epochs: 500 }).then(() => {
  model.predict(tf.tensor2d([5], [1, 1])).print();
});
