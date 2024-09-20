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
        
        numbers = numbers.replaceAll('\n',',');
        const numArr :string[] = numbers.split(delimiter);
        console.log("🚀 ~ StringCalculator ~ add ~ numArr:", numArr)
        let total = 0;
        numArr.forEach((n) => total += parseInt(n))

        return total;
    }

}

export default StringCalculator;