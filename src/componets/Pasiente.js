import React from "react";
import {
    Text,
    View,
    StyleSheet,

} from 'react-native'

const Paciente = ({ item }) => {
    const { pasiente, fecha } = item
    const fornatearFecha = fecha => {
        const nuevaFecha = new Date(fecha)
        const opcion = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return nuevaFecha.toLocaleDateString('es-ES', opcion)

    }
    return (
        <View style = {style.contenedor}>
            <Text style = {style.label}>pasiente:</Text>
            <Text style = {style.texto}>{pasiente}</Text>
            <Text style = {style.fecha}>{fornatearFecha(fecha)}</Text>
        </View>
        

    )
}
const style = StyleSheet.create({
    contenedor:{

        backgroundColor :'#fff',
        padding:20,
        borderBlockColor:'#262c2e',
        borderBottomWidth: 1,
    },
    label: {
        color:'#2785a4',
        textTransform:"uppercase",
        fontWeight:'700',
        marginBottom:10,

    },
    texto:{
        color:'##82c2b2',
        fontSize:20,
        fontWeight:'700',
        marginBottom:10,

    },
    fecha:{
        color:'#2785a4'

    },
  

})

export default Paciente