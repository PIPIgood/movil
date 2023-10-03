import React, { useState } from "react";
import { 
    Modal,
    SafeAreaView,
    StyleSheet, 
    Text,
    TextInput, 
    View
     } from "react-native";
import DatePicker from '@dietime/react-native-date-picker';

function Formulario(props) {
    const { modalVisible } = props;
    const [date, setDate] = useState(null);
    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <View ><Text style={styles.tituloChido}>Nueva Cita </Text></View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del paciente: </Text>
                    <TextInput style={styles.input} placeholder="Nombre del paciente" placeholderTextColor={'#646464'}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del propietario: </Text>
                    <TextInput style={styles.input} placeholder="Nombre del propietario" placeholderTextColor={'#646464'}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email del propietario: </Text>
                    <TextInput style={styles.input} placeholder="Email del propietario" placeholderTextColor={'#646464'} keyboardType="email-address"></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono del propietario: </Text>
                    <TextInput style={styles.input} placeholder="Teléfono del propietario" placeholderTextColor={'#646464'} keyboardType="number-pad"></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta</Text>
                    <DatePicker
                        value={date}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas: </Text>
                    <TextInput style={styles.input} placeholder="Sintomas" placeholderTextColor={'#646464'} keyboardType="number-pad"></TextInput>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '',
        flex: 1,
        backgroundColor: '#5f35B9'
    },
    tituloChido: {
        marginTop: 30,
        fontSize: 30,
        // fontWeight: '800',
        textAlign: "center"
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        testAlign: 'center',
        marginTop: 30,
        color: '#fff'
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