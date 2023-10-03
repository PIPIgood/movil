import React from "react";
import{
    Modal,
    SafeAreaView,
    StyleProp,
    StyleSheet,
    TextInput,
    View,
    text,
}from 'react-native'

const formulario = (props) => {
    const{modalVisible} = props
    return (
        <Modal>
        animationType='slide'
        visible=(props,modalVisible)

        <SafeAreaView>
            <TexT style={style.titulo}>nuevo{''}
            <Text style={styleBold}>cita</Text>
            </Text>
            <View>
                <Text>Nombre del pasiente</Text>
                <TextInput
               
                blaceHolder='nombre del pasiente'
                placeholderTextColor={'#fff'}
                
                />

                
            </View>

        </SafeAreaView>
        
        </Modal>


    )
}
const style = StyleSheet.create({
    contenido:{
        backgroundColor:'#602809',
        flex:1,
    },
    titulo:{
        fontSize:30,
        fontWeight:'600',
        textAlign:30,
        tintColor:'#FFF'
    },
    
    titiloBold:{
        fontWeight:'900'


    },
    campo:{
        margin:48
        mar
    }





    }
)