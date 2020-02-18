describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(window, "swap").and.callThrough();
  });
  it("the number of swaps to sort an array is a fractorial of the array length less 1", function() {
    // let r;
    // function factorial(num) {
    //   var result = num;
    //   if (num === 0 || num === 1) return 1;
    //   while (num > 1) {
    //     num--;
    //     result *= num;
    //   }
    //   return result;
    // }
    // let swap1 = factorial(r.length - 1);

    // bubbleSort(r);
    expect(window.swap.calls.count()).toEqual(28);
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles one item", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("sorts an array", function() {
    expect(bubbleSort([5, 2, 8, 6, 1, 7, 4, 3])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });

  //   it("sorts differing array lengths", function() {
  //     expect(bubbleSort([12, 32, 1, 35, 6, 8])).toEqual([1, 6, 8, 12, 32, 35]);
  //   });
});
