function sum(a, b) {
    return a + b;
}

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

describe("testing truthiness", () => {
    test("null", () => {
        const value = null;
        expect(value).toBeNull();
    });

    test("zero", () => {
        const value = 0;
        expect(value).not.toBeNull();
    })
});

// ...


