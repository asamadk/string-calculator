class StringCalculator{

    private validateInput(numbers :string) :number{
        if(numbers.length < 1){
            return 0
        }
        // throw new Error('Invalid Input')
        return 0;
    }

    add(numbers :string):number{
        this.validateInput(numbers);
        const delimiter = ',';
        const numArr :string[] = numbers.split(delimiter);
        let total = 0;
        numArr.forEach((n) => total += parseInt(n))

        return total;
    }

}

export default StringCalculator;