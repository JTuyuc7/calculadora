import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import UseCalculadora from '../hooks/useCalculadora';

enum Operadores {
    sumar, restar, multiplicar, dividir
}
const CalculadoraScreen = () => {

    const { prevNumber, number, clear, btnDelete, btnDividir, btnMultiplicar, btnSumar, btnRestar, formData, positiveNegative, calculate } = UseCalculadora();

    return (
        <>
            <View style={styles.calculadoraContainer}>
                <View >
                    {
                        prevNumber !== '0' && (<Text style={styles.smallResult}>{prevNumber}</Text>)
                    }
                    <Text 
                        style={styles.resultado}
                        numberOfLines={1}
                        adjustsFontSizeToFit={true}
                    >
                        {
                            number === 'NaN' ? 'Can not divide by 0' : number
                        }
                    </Text>
                </View>
                <View style={styles.containerBtns}>
                    <BotonCalc texto='c' color="#a5a5a5" textColor='#000' width={80} alignText='center' action={clear} />
                    <BotonCalc texto='+/-' color="#a5a5a5" textColor='#000' width={80} alignText='center' action={positiveNegative} />
                    <BotonCalc texto='del' color="#a5a5a5" textColor='#000' width={80} alignText='center' action={btnDelete} />
                    <BotonCalc texto='/' color="#fea017" textColor='#FFF' width={80} alignText='center' action={btnDividir} />
                </View>

                <View style={styles.containerBtns}>
                    <BotonCalc texto='7' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='8' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='9' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='X' color='#fea017' textColor='#FFF' width={80} alignText='center' action={btnMultiplicar} />
                </View>

                <View style={styles.containerBtns}>
                    <BotonCalc texto='4' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='5' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='6' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='-' color='#fea017' textColor='#FFF' width={80} alignText='center' action={btnRestar} />
                </View>

                <View style={styles.containerBtns}>
                    <BotonCalc texto='1' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='2' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='3' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    <BotonCalc texto='+' color='#fea017' textColor='#FFF' width={80} alignText='center' action={btnSumar} />
                </View>

                <View style={styles.containerBtns}>
                    <BotonCalc texto='0' color='#323332' textColor='#FFF' width={180} alignText='flex-start' margin action={formData} />
                    <BotonCalc texto='.' color='#323332' textColor='#FFF' width={80} alignText='center' action={formData} />
                    {/*<BotonCalc texto='' color='#323332' textColor='#FFF' />*/}
                    <BotonCalc texto='=' color='#fea017' textColor='#FFF' width={80} alignText='center' action={calculate} />
                </View>
                
            </View>
        </>
    )
}

export default CalculadoraScreen;
