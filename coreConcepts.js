const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

const shape = [2, 3]; //2rows, 3 col
const test = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape, "int32");

test.print();

// same as above but using a tensor with
// better readability
const test2d = tf.tensor2d([1, 2, 3, 10, 20, 30], shape);
test2d.print();

//all values set to zero, but the shape
// is described.
const zeros = tf.zeros([5, 5]);
zeros.print();

// tensors are immutable.
// however, if you assign them to a variable
// the tensors can change/update
// Variables are primarily used to store and then update values during model training.
const initialValues = tf.zeros([5]);
const biases = tf.variable(initialValues);

biases.print();

const updateValues = tf.tensor1d([0, 1, 0, 1, 0]);
biases.assign(updateValues);
biases.print();

const smallShape = [2, 2];

// operations
// squaring a number set
const d = tf.tensor2d([1, 2, 3, 4], smallShape);
d.print();

const dSquared = d.square();
dSquared.print();

// add, sub, multiplay
const e = tf.tensor2d([[1, 2], [3, 4]]);
const f = tf.tensor2d([[5, 6], [7, 8]]);

const sum = e.add(f);
sum.print();

// chainable
const sumSquared = e.add(f).square();
sumSquared.print();

//----------------------------------

/* Models and layers */

// model - a function that given some input will produce some desired output

// define function
function predict(input) {
  // y = a*x ^ 2 + b *x +c
  return tf.tidy(() => {
    const x = tf.scalar(input);
    const ax2 = a.mul(x.square());
    const bx = b.mul(x);
    const y = ax2.add(bx).add(c);

    return y;
  });
}

// define constants: y = 2x^2+4x+8
const a = tf.scalar(2);
const b = tf.scalar(4);
const c = tf.scalar(8);

// predict output for input of 2
const result = predict(3);
result.print();

// tf.tidy

const average = tf.tidy(() => {
  const y = tf.tensor1d([1, 2, 3, 4]);
  const z = tf.ones([4]);

  return y
    .sub(z)
    .square()
    .mean();
});

average.print();
