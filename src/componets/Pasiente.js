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
        <View>
            <Text>{pasiente}</Text>
            <Text>{fornatearFecha(fecha)}</Text>

        </View>

    )
}
export default Paciente