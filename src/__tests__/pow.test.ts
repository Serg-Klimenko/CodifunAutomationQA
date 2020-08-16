function pow(a: number) {
    return a ** 2;
}

describe ('Typescript', () => {
    test('pow function', async () => {
        expect(pow(3)).toEqual(9);
    });
})