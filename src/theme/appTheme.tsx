import { StyleSheet } from "react-native";

// npx react-native init AwesomeTSProject --template react-native-template-typescript
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 15
    },
    calculadoraContainer: {
        flex: 1,
        //backgroundColor: 'green',
        justifyContent: 'flex-end'
    },
    resultado: {
        color: '#FFF',
        fontSize: 55,
        textAlign: 'right',
        fontWeight: '400',
        marginBottom: 10
    },
    smallResult: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 35,
        textAlign: 'right',
        fontWeight: '400'
    },
    btnStyle: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: "#a5a5a5",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    textBtn: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerBtns:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 5
    }
})