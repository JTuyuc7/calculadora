import React, { useState, useRef } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

const UseCalculadora = () => {
    const [ prevNumber, setPrevNumber ] = useState('0');
    const [ number, setNumber ] = useState('0');
    const [ error, setError ] = useState('');

    const ultimaOperacion = useRef<Operadores>();

    const clear = () => {
        setNumber('0');
        setPrevNumber('0')
    };

    const formData = ( numText: string ) => {
        if( number.includes('.') && numText === '.') return;

        if( number.startsWith('0') || number.startsWith('-0')){
            //Punto decimal
            if( numText === '.' ){
                setNumber( number + numText )
                // Evaluar si es otro 0 y tiene un punto
            }else if( numText === '0' && number.includes('.')) {
                setNumber( number + numText )
                
                //Diferente de 0 y no tiene un punto
            }else if( numText !== '0' && !numText.includes('.') ){
                setNumber(numText)

                // Evitar 000.0
            }else if( numText === '0' && !number.includes('.')){
                setNumber( number )
            }else {
                setNumber( number + numText )
            }
        }else{
            setNumber( number + numText )
        }
    };

    const btnDelete = () => {
        let negative = '';
        let tempNum = number;
        if( number.includes('-')){
            negative = '-';
            tempNum = number.substring(1);
        }

        if( tempNum.length > 1){
            setNumber( negative + tempNum.slice(0, -1))
        }else {
            setNumber('0')
        }
    }

    const positiveNegative = () => {
        if( number.includes('-') ){
            setNumber( number.replace('-', ''));
        }else{
            setNumber( '-' + number )
        }
    }

    const changeNumforPrev = () => {
        if( number.endsWith('.') ){
            //number.slice(0,-1)
            setPrevNumber(number.slice(0,-1));
        }else {
            setPrevNumber(number)
        }
        
        setNumber('0');
    }

    const btnDividir = () => {
        changeNumforPrev();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnSumar = () => {
        changeNumforPrev();
        ultimaOperacion.current = Operadores.sumar;
    }

    const btnMultiplicar = () => {
        changeNumforPrev();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        changeNumforPrev();
        ultimaOperacion.current = Operadores.restar;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(prevNumber)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumber( `${ num1 + num2 }`);
                break;
            case Operadores.restar:
                setNumber( `${num2-num1}`);
                break;
            case Operadores.dividir:{
                setNumber( `${(num2/num1).toFixed(2)}`);

            }
                
                break;
            case Operadores.multiplicar:
                setNumber( `${num1*num2}`);
                break;
            default:
                break;
        }

        setPrevNumber('0')
    }

    return {
        number,
        prevNumber,
        clear,
        formData,
        btnDelete,
        positiveNegative,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calculate,
        error
    }
}

export default UseCalculadora;