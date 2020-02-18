describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    // your code here
    expect(split([5, 2, 8, 6, 1, 7, 4, 3])).toEqual([
      [5, 2, 8, 6],
      [1, 7, 4, 3]
    ]);
    expect(split([5, 2, 8, 6, 1, 7, 4])).toEqual([
      [5, 2, 8],
      [6, 1, 7, 4]
    ]);
  });

  it("returns the whole array if there is only one element", function() {
    expect(split([1])).toEqual([1]);
    expect(split([2])).toEqual([2]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(mergeSort([5, 2, 8, 6, 1, 7, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
