const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

// set up variables
const a = tf.variable(tf.scalar(Math.random()));
const b = tf.variable(tf.scalar(Math.random()));
const c = tf.variable(tf.scalar(Math.random()));
const d = tf.variable(tf.scalar(Math.random()));

// build a model
// y = ax^3 + bx^2 + cx + d

function predict(x) {
  // y = a * x ^ 3 + b * x ^ 2 + c * x + d
  return tf.tidy(() => {
    return a
      .mul(x.pow(tf.scalar(3)))
      .add(b.mul(x.square()))
      .add(c.mul(x))
      .add(d);
  });
}

predict();
