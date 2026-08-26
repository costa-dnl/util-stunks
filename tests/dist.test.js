const assert = require("node:assert/strict");
const test = require("node:test");

const utilStunks = require("..");

test("o build exporta a API pública esperada", () => {
  assert.deepEqual(
    Object.keys(utilStunks).sort(),
    ["abbreviate", "msToTime", "randomArray", "relativeTime", "unabbreviate"],
  );
});

test("o build abrevia e expande números", () => {
  assert.equal(utilStunks.abbreviate(1_500), "1.5K");
  assert.equal(utilStunks.unabbreviate("1.5K"), 1_500);
  assert.equal(utilStunks.unabbreviate("2m"), 2_000_000);
});

test("o build formata durações", () => {
  assert.equal(
    utilStunks.msToTime(61_000, { display: 2, removeMs: true }),
    "1 minuto e 1 segundo",
  );
});

test("o build aplica rótulos personalizados", () => {
  assert.equal(
    utilStunks.relativeTime(
      Date.now() - 3_600_000,
      { display: 1, removeMs: true },
      { hours: { unique: "hour", plural: "hours" }, separator: "and" },
    ),
    "1 hour",
  );
});

test("o build seleciona itens sem repetição", () => {
  const originalRandom = Math.random;
  Math.random = () => 0;

  try {
    const input = ["a", "b", "c"];
    assert.deepEqual(
      utilStunks.randomArray(input, { quantity: 2, removeSelectItem: true }),
      ["a", "b"],
    );
    assert.deepEqual(input, ["c"]);
  } finally {
    Math.random = originalRandom;
  }
});
