const capitalize = (input_string) => {
  const input_to_array = input_string.split('');
  const first = input_to_array.shift().toUpperCase();
  return first + input_to_array.join('');
};

const reverse = (input_string) => {
  const strToArray = input_string.split('');
  return strToArray.reverse().join('');
};

const add = (input_1, input_2) => {
  return input_1 + input_2;
};

const subtract = (input_1, input_2) => {
  return input_1 - input_2;
};

const multiply = (input_1, input_2) => {
  return input_1 * input_2;
};

const divide = (input_1, input_2) => {
  return input_1 / input_2;
};

export { capitalize, reverse, add, subtract, divide, multiply };
