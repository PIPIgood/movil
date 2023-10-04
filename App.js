import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Formulario from './src/componets/formulario.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>
      <Pressable onPress={() => {setModalVisible(!modalVisible)}} 
      style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} setActive={setModalVisible}
      setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}

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
    color: '#6d28d9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
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
  }
});