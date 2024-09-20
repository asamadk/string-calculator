class StringCalculator {

    private validateInput(numbers: string): number {
        if (numbers.length < 1) {
            return 0
        }
        // throw new Error('Invalid Input')
        return 0;
    }

    add(numbers: string): number {
        this.validateInput(numbers);
        const delimiter = this.getDelimiter(numbers);
        console.log("🚀 ~ StringCalculator ~ add ~ delimiter:", delimiter)
        numbers = numbers.replaceAll('\n', delimiter);
        const numArr: string[] = numbers.split(delimiter);
        return this.getTotal(numArr);
    }

    private getTotal(numArr: string[]): number {
        console.log("🚀 ~ StringCalculator ~ add ~ numArr:", numArr)
        let total = 0;
        numArr.forEach((n) => {
            const tmp = parseInt(n);
            console.log("🚀 ~ StringCalculator ~ numArr.forEach ~ tmp:", tmp)
            if (!isNaN(tmp)) {
                total += tmp;
            }
        });
        console.log("🚀 ~ StringCalculator ~ getTotal ~ total:", total)
        return total;
    }

    private getDelimiter(numbers: string): string {
        const delimiter = ',';
        const delExpIndex = numbers.indexOf('//');
        if (delExpIndex !== 0) { return delimiter; }
        const newDelimiter = numbers[2];
        if (newDelimiter != null && newDelimiter.length === 1) {
            return newDelimiter;
        }
        return delimiter;
    }

}

export default StringCalculator;