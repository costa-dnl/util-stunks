import { OptionsRandomArray } from "../interface/";

export const defaultRandomArrayOptions: OptionsRandomArray = {
  quantity: 1,
  removeSelectItem: true,
};

export const randomArray = (input: any[], options: OptionsRandomArray = defaultRandomArrayOptions) => {
  if (!Array.isArray(input)) throw new TypeError("O 'input' deve ser do tipo 'array'")

  if ((options.quantity ?? 1) < 1) throw new Error("O 'options.quantity' deve maior ou igual a 1");

  let arr: any[] = [];

  for (let i = 0; i < (options.quantity ?? 1); i++) {
    let value = ~~(Math.random() * input.length);
    arr.push(input[value]);

    if (options.removeSelectItem) {
      input.splice(value, 1);
    }
  }

  return arr;
}