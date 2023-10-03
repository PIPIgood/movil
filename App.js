import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{StyleSheet,
  text,
  View,
  SafeAreaView,
  modal,
  button,
  Pressable
}from 'react-native'



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },

   titulo:{
    textAlign:'center',
    color:'#374151',
    fontSize:30,
    fontWeight:'600'

   },
   tituloBold:{
    fontWeight:'900',
    color:'#6d28d9',

   },

   btnNuevaCita:{
    backgroundColor:'6d28d9',
    padding:20,
    margin:20,
    marginHorizontal:20,
    borderRadius:10,
   },
   btnTextoNuevaCita:{
    textAlign:'center',
    color:'afff',
    fontSize:18,
    fontWeight:'800',
    textTransform:'uppercase'
   }
                                                                                                                                                               
});
                                      