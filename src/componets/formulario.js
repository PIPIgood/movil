    import React, { useEffect, useState } from "react";
import {
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
} from "react-native";
import DatePicker from '@dietime/react-native-date-picker';

function formulario({ modalVisible, setActive, pacientes, setPacientes, pasiente: pasienteObj, setPaciente: setPacienteApp }) {
    const [paciente, setPaciente] = useState('')
    const [id,setid] =useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [Fecha, setFecha] = useState('')


    useEffect(() => {
        if(Object.keys(pasienteObj).length > 0 ){
        setid(pasienteObj.id)
        setPaciente(pasienteObj.paciente)
        setPropietario(pasienteObj.propietario)
        setEmail(pasienteObj.email)
        setTelefono(pasienteObj.telefono)
        setSintomas(pasienteObj.sintomas)
        setFecha(pasienteObj.fecha)
    }
    }, [pacientes])

    const handleCita = () => {
        if ([paciente, propietario, email, Fecha, sintomas].includes('')) {
            Alert.alert(
                'Error', 'Todos los campos son obligatorios',
                [{ text: 'Cancelar', style: 'destructive' }, { text: 'ok' }]

            )
            return

        }

        const NuevoPaciente = {
            // id:Date.now(),
            pasiente: paciente,
            // propietario,
            // email,
            // telefono,
            fecha: Date.now()
            // sintomas,
        }
        if(id){
            NuevoPaciente.id=id
            const PacientesActualiados = pacientes.map(pacienteState =>
                pacienteState === NuevoPaciente.id ? NuevoPaciente : pacienteState)
                setPaciente(PacientesActualiados)
                setPacienteApp({})
        }else{
            NuevoPaciente.id = Date.now()
            setPaciente([...pacientes,NuevoPaciente])
        }      
        
        setActive(!modalVisible)

        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha('')
        setSintomas('')
    }




    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <View ><Text style={styles.tituloo}>Nueva Cita </Text></View>
                    <Pressable
                        style={styles.btnCancelar}
                        onPress={() => setActive(!modalVisible)}
                    >
                        <Text style={styles.btnCancelarTexto}>Cancelar
                        </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}
                        >Nombre del paciente </Text>
                        <TextInput style={styles.input}
                            placeholder="Nombre del paciente"
                            placeholderTextColor={'#646464'} value={paciente} onChangeText={setPaciente}></TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}
                        >Nombre del propietario </Text>
                        <TextInput style={styles.input}
                            placeholder="Nombre del propietario"
                            placeholderTextColor={'#646464'} value={propietario} onChangeText={setPropietario}></TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}
                        >Email del propietario </Text>
                        <TextInput style={styles.input}
                            placeholder="Email del propietario"
                            placeholderTextColor={'#646464'} keyboardType="email-address" value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}
                        >Teléfono del propietario </Text>
                        <TextInput style={styles.input}
                            placeholder="Teléfono del propietario"
                            placeholderTextColor={'#646464'} keyboardType="number-pad" value={telefono} onChangeText={setTelefono}></TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}
                        >Fecha Alta</Text>
                        <DatePicker
                            value={Fecha} onChange={setFecha} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas: </Text>
                        <TextInput style={styles.input}
                            placeholder="Sintomas"
                            placeholderTextColor={'#646464'} value={sintomas} onChangeText={setSintomas}></TextInput>
                    </View>
                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={handleCita}
                    >
                        <Text style={styles.btnCitaTexto}>Agregar Cita
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
        backgroundColor: '#2785a4'
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

    btnCancelar: {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#a42729',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,

    },
    btnCancelarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#6ca427',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,


    },
    btnCitaTexto: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
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

export default formulario