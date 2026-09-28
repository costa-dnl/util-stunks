import { OptionsRandomArray } from "../interface";

export const defaultRandomArrayOptions: OptionsRandomArray = {
  quantity: 1,
  removeSelectItem: true,
};

export const randomArray = <T>(
  input: T[],
  options: OptionsRandomArray = defaultRandomArrayOptions
): T[] => {
  if (!Array.isArray(input)) {
    throw new TypeError("O parâmetro 'input' deve ser do tipo array.");
  }

  const quantity = options.quantity ?? 1;
  if (quantity < 1) {
    throw new Error("A opção 'quantity' deve ser maior ou igual a 1.");
  }

  const source = options.removeSelectItem ? [...input] : input;
  const result: T[] = [];

  const max = options.removeSelectItem
    ? Math.min(quantity, source.length)
    : quantity;

  for (let i = 0; i < max; i++) {
    const index = Math.floor(Math.random() * source.length);
    result.push(source[index]);

    if (options.removeSelectItem) {
      source.splice(index, 1);
    }
  }

  return result;
};
