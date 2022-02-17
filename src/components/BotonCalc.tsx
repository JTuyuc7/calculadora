import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color: "#a5a5a5" | "#fea017" | "#323332";
    textColor: "#000" | "#FFF";
    width: number;
    alignText: 'center' | 'flex-start';
    margin?: boolean;
    action: ( numText: string) => void
}

const BotonCalc = ({color, width, alignText, action, margin, textColor, texto}: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action(texto) }
        >
            <View  
                style={
                    [styles.btnStyle, {backgroundColor: color, width: width, alignItems: alignText }]
                }
            >
                <Text 
                    style={[styles.textBtn, {color: textColor, marginLeft: (margin) ? 30 : 0 }]}
                >{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BotonCalc;