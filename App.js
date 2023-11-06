import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

import Formulario from './src/componets/formulario.js';
import { StatusBar } from 'expo-status-bar';
import Paciente from './src/componets/Pasiente.js';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [pasientes, setPacientes] = useState(data)
  const pasienteEditar = id => {
    console.log('editando...', id)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>
      <Pressable onPress={() => { setModalVisible(!modalVisible) }}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pasientes.length === 0 ?
        <Text style={styles.noPasientes}>No hay pasientes aun</Text> :
         <FlatList
           style={styles.listado}
           data={pasientes}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible = {setModalVisible}
                pasienteEditar = {pasienteEditar}
              /> 

            )
          }

           }

        />
      }
      <Formulario
        modalVisible={modalVisible}
        setActive={setModalVisible}
        setPacientes={setPacientes}
        pasientes={pasientes}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    pasiente:"Alan",
    fecha:Date.now()
  },
  {
    pasiente:"manuel",
    fecha:Date.now()
  },
]
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
    marginTop: 80,
  },
  titulo: {
    marginTop: 30,
    textAlign: 'center',
    color: '#374151',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tituloBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#a48d27',
  },
  btnNuevaCita: {
    backgroundColor: '#2785a4',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  noPasientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',

  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,


  }
});