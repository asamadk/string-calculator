import { CSSProperties } from "react";

export const calculatorMainStyle :CSSProperties = {
    background : '#f5eef8',
    padding : 2,
    height : 'calc(100vh - 35px)',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center'
}

export const calculatorCardStyle :CSSProperties = {
    padding : 4,
    width : '20%',
    minWidth : '220px',
    margin : 'auto'
}

export const calculatorCardText :CSSProperties = {
    fontWeight : 600,
    marginBottom : '10px'
}