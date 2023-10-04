import React, { useState } from "react";
import { 
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    Text,
    TextInput, 
    View
     } from "react-native";
import DatePicker from '@dietime/react-native-date-picker';

function Formulario({modalVisible, setActive}) {
    const [date, setDate] = useState(null);
    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                <View ><Text style={styles.tituloo}>Nueva Cita </Text></View>
                <Pressable
                 style={styles.btnCancelar}
                 onLongPress={() => setActive(!modalVisible)}
                 >
                    <Text style={styles.btnCancelarTexto}>Cancelar
                    </Text>
                </Pressable>

                <View style={styles.campo}>
                    <Text style={styles.label}
                    >Nombre del paciente </Text>
                    <TextInput style={styles.input}
                     placeholder="Nombre del paciente"
                      placeholderTextColor={'#646464'}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}
                    >Nombre del propietario </Text>
                    <TextInput style={styles.input}
                     placeholder="Nombre del propietario" 
                     placeholderTextColor={'#646464'}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}
                    >Email del propietario </Text>
                    <TextInput style={styles.input} 
                    placeholder="Email del propietario" 
                    placeholderTextColor={'#646464'} keyboardType="email-address"></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}
                    >Teléfono del propietario </Text>
                    <TextInput style={styles.input} 
                    placeholder="Teléfono del propietario" 
                    placeholderTextColor={'#646464'} keyboardType="number-pad"></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}
                    >Fecha Alta</Text>
                    <DatePicker
                        value={date}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas: </Text>
                    <TextInput style={styles.input}
                     placeholder="Sintomas" 
                     placeholderTextColor={'#646464'} keyboardType="number-pad"></TextInput>
                </View>
                <Pressable
                 style={styles.btnAgregar}
                 >
                    <Text style={styles.btnNuevaCita}>Agregar Cita
                    </Text>
                </Pressable>
                </ScrollView>
            </SafeAreaView>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '',
        flex: 1,
        backgroundColor: '#b9355a'
    },
    tituloo: {
        marginTop: 30,
        fontSize: 30,
        textAlign: "center"
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        testAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },

    btnCancelar:{
        marginTop:30,
        marginBottom:30,
        backgroundColor: '#5827A4',
        marginHorizontal:30,
        padding:20,
        borderRadius:10,

    },
    btnCancelarTexto:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'900',
        fontSize:20,
        textTransform:'uppercase'
    },
    btnAgregar:{
        marginVertical: 50,
        backgroundColor:'#F59E0B',
        paddingVertical:15,
        marginHorizontal:30,
        borderRadius:10,


    },
    btnNuevaCita:{
        textAlign:'center',
        color:'#5827A4',
        textTransform:'uppercase',
        fontWeight:'900',
        fontSize:16,
    },

    campo: {
        marginTop: 10,
        marginHorizontal: 30,
        color: '#000',
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18,
        textAlign: "center",
    }
})

export default Formulario