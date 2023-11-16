interface OptionsRandomArray {
  quantity?: number;
  removeSelectItem?: boolean;
}

const randomArray = (input: [], options: OptionsRandomArray = { quantity: 1, removeSelectItem: false }) => {
  if (!Array.isArray(input)) throw new TypeError('O "input" deve ser do tipo "array"');
  if (options.quantity < 1) throw new Error('O "options.quantity" deve maior ou igual a 1');

  let arr: [] = [];

  for (let i: number = 0; i < options.quantity; i++) {
    let value: number = ~~(Math.random() * input.length);
    arr.push(input[value]);
    
    if (options.removeSelectItem) {
      input.splice(value, 1);
    }
  }

  return arr;
}

export default randomArray;
export { OptionsRandomArray };