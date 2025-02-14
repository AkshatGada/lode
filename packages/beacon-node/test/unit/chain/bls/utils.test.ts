import {describe, it, expect} from "vitest";
import {chunkifyMaximizeChunkSize} from "../../../../src/chain/bls/utils.js";
import {linspace} from "../../../../src/util/numpy.js";

describe("chain / bls / utils / chunkifyMaximizeChunkSize", () => {
  const minPerChunk = 3;
  const testCases = [
    [[0]],
    [[0, 1]],
    [[0, 1, 2]],
    [[0, 1, 2, 3]],
    [[0, 1, 2, 3, 4]],
    [
      [0, 1, 2],
      [3, 4, 5],
    ],
    [
      [0, 1, 2, 3],
      [4, 5, 6],
    ],
    [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
    ],
  ];

  for (const [i, testCase] of testCases.entries()) {
    it(`array len ${i + 1}`, () => {
      const arr = linspace(0, i);
      const chunks = chunkifyMaximizeChunkSize(arr, minPerChunk);
      expect(chunks).toEqual(testCase);
    });
  }
});
