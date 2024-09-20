import StringCalculator from "../Utils/StringCalculator";

describe('Basic Test',() => {

    test('Empty input test',() => {
        const sc = new StringCalculator();
        const res = sc.add('');
        expect(res === 0);
    });

    test('Single number test',() => {
        const sc = new StringCalculator();
        const res = sc.add('1');
        expect(res === 1);
    });

    test('Multiple number test',() => {
        const sc = new StringCalculator();
        const res = sc.add('1,5');
        expect(res === 6);
    });

    test('Newline input between number test',() => {
        const sc = new StringCalculator();
        const res = sc.add('1\n2,3');
        expect(res === 6);
    });

})

export {}