import { Box, Button, Card, Divider, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { calculatorCardStyle, calculatorCardText, calculatorMainStyle } from '../Styles/CalculatorStyle'
import StringCalculator from '../Utils/StringCalculator';

function CalculatorComponent() {

    const [totalValue, setTotalValue] = useState<number | undefined>(undefined);
    const [inputVal, setInputVal] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')

    function handleReset() {
        setTotalValue(undefined);
        setInputVal('');
    }

    function handleCalculate() {
        try{
            const stringCalculator = new StringCalculator();
            const res: number = stringCalculator.add(inputVal);
            setTotalValue(res);
        }catch(error :any){
            setOpen(true);
            setMessage(error.message);
        }
    }

    function SnackBar() {
        return <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message={message}
        />
    }

    function StringCard() {
        return <Card sx={calculatorCardStyle} >
            <Typography sx={calculatorCardText} variant='h6' >
                Calculate String !
            </Typography>
            <TextField
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                color='secondary'
                fullWidth
                size='small'
                label='Enter Numbers'
                placeholder='E.g 1,25,5,12'
            />
            <Box mt={2} >
                <Button
                    onClick={handleCalculate}
                    fullWidth
                    color='secondary'
                    size='small'
                    variant='contained'
                >Calculate</Button>
                <Button
                    onClick={handleReset}
                    sx={{ mt: 1 }}
                    fullWidth
                    color='secondary'
                    size='small'
                    variant='outlined'
                >Reset</Button>
            </Box>
            <Divider sx={{ m: 2 }} />
            <Typography variant='h4' >
                Result : {totalValue == undefined ? `N/A` : totalValue}
            </Typography>
        </Card>
    }

    return (
        <Box sx={calculatorMainStyle} >
            {StringCard()}
            {SnackBar()}
        </Box>
    )
}

export default CalculatorComponent