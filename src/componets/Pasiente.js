import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Pressable,

} from 'react-native'

const Paciente = ({ item,setModalVisible,pasienteEditar}) => {
    const { pasiente, fecha ,id} = item
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
        <View style={style.contenedor}>
            <Text style={style.label}>pasiente:</Text>
            <Text style={style.texto}>{pasiente}</Text>
            <Text style={style.fecha}>{fornatearFecha(fecha)}</Text>

           
            <View style={style.contenedorBotones}>
                <Pressable 
            
                style={[style.btn, style.btnEditar]}
                onLongPress={() => {
                    setModalVisible(true)
                    pasienteEditar(id)
                }}
                
                >
                    <Text style={style.btnTexto}>Editar</Text>
                </Pressable>
                  
                <Pressable style={[style.btn, style.btnEliminar]}>
                    <Text style={style.btnTexto}>Eliminar</Text>
                </Pressable>
            </View>
        </View>



    )
}
const style = StyleSheet.create({
    contenedor: {

        backgroundColor: '#fff',
        padding: 20,
        borderBlockColor: '#262c2e',
        borderBottomWidth: 1,
    },
    label: {
        color: '#2785a4',
        textTransform: "uppercase",
        fontWeight: '700',
        marginBottom: 10,

    },
    texto: {
        color: '#82c2b2',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,

    },
    fecha: {
        color: '#2785a4'

    },
    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,

    },

    btn:{
        paddingVertical: 5,
        paddingHorizontal:20,
        borderRadius:5

    },
    btnEditar:{
        backgroundColor:'#B7DFC4',


    },
    btnEliminar:{
        backgroundColor:'#F03128'

    },
    btnTexto:{
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize:12,
        color:'#fffff'

    }



})

export default Paciente