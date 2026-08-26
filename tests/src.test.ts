import { afterEach, describe, expect, it, vi } from "vitest";

import {
  abbreviate,
  msToTime,
  randomArray,
  relativeTime,
  unabbreviate,
} from "../src";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("abbreviate", () => {
  it.each([[0, "0"], [1_500, "1.5K"], [2_000_000, "2M"]])(
    "abrevia %s para %s",
    (input, expected) => expect(abbreviate(input)).toBe(expected),
  );

  it("rejeita valores que não são números", () => {
    expect(() => abbreviate(Number.NaN)).toThrow(TypeError);
  });
});

describe("unabbreviate", () => {
  it.each([["1.5K", 1_500], ["2m", 2_000_000], ["42", 42]])(
    "expande %s para %s",
    (input, expected) => expect(unabbreviate(input)).toBe(expected),
  );

  it("rejeita entradas que não são strings", () => {
    expect(() => unabbreviate(10 as unknown as string)).toThrow(TypeError);
  });
});

describe("conversões de tempo", () => {
  it("converte milissegundos em texto", () => {
    expect(msToTime(61_000, { display: 2, removeMs: true }))
      .toBe("1 minuto e 1 segundo");
  });

  it("personaliza rótulos e separador do tempo relativo", () => {
    vi.spyOn(Date, "now").mockReturnValue(1_800_000_000_000);
    expect(relativeTime(
      Date.now() - 3_660_000,
      { display: 2, removeMs: true },
      {
        hours: { unique: "hour", plural: "hours" },
        minutes: { unique: "minute", plural: "minutes" },
        separator: "and",
      },
    )).toBe("1 hour and 1 minute");
  });

  it("mantém os rótulos compactos originais", () => {
    vi.spyOn(Date, "now").mockReturnValue(1_800_000_000_000);
    expect(relativeTime(
      Date.now() - 3_660_000,
      { compact: true, display: 2, removeMs: true },
      {
        hours: { unique: "hour", plural: "hours" },
        minutes: { unique: "minute", plural: "minutes" },
        separator: "and",
      },
    )).toBe("1h 1m");
  });
});

describe("randomArray", () => {
  it("seleciona a quantidade pedida sem repetir e remove os itens", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const input = ["a", "b", "c"];
    expect(randomArray(input, { quantity: 2, removeSelectItem: true }))
      .toEqual(["a", "b"]);
    expect(input).toEqual(["c"]);
  });

  it("rejeita entradas que não são arrays", () => {
    expect(() => randomArray("a" as unknown as string[])).toThrow(TypeError);
  });
});
