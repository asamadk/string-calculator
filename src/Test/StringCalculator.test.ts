import StringCalculator from "../Utils/StringCalculator";

describe('Basic Test',() => {

    test('Empty input test',() => {
        const sc = new StringCalculator();
        const res = sc.add('');
        expect(res).toEqual(0);
    });

    test('Single number test',() => {
        const sc = new StringCalculator();
        const res = sc.add('1');
        expect(res).toEqual(1);
    });

    test('Multiple number test',() => {
        const sc = new StringCalculator();
        const res = sc.add('1,5');
        expect(res).toEqual(6);
    });

    test('Newline input between number test',() => {
        const sc = new StringCalculator();
        const res = sc.add('1\n2,3');
        expect(res).toEqual(6);
    });

    test('Dynamic delimiter input test',() => {
        const sc = new StringCalculator();
        const res = sc.add('//;\n1;2');
        expect(res).toEqual(3);
    });

    test('Negative number input test',() => {
        const sc = new StringCalculator();
        try{
            sc.add('//;\n1;-2');
        }catch(error :any){
            expect(error.message).toBe('negative numbers not allowed')
        }
    });

    test('Multiple Negative number input test',() => {
        const sc = new StringCalculator();
        try{
            sc.add('//;\n1;-2;-3;-4');
        }catch(error :any){
            console.log("🚀 ~ test ~ error:", error.message)
            expect(error.message).toEqual('negative numbers not allowed : -2,-3,-4')
        }
    });

})

export {}