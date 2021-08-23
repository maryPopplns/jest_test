const capitalize = (input_string) => {
  const input_to_array = input_string.split('');
  const first = input_to_array.shift().toUpperCase();
  return first + input_to_array.join('');
};

export { capitalize };
