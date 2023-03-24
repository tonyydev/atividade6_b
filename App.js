import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'; 
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 

export default function App() {
  const [ligar, setLigar] = useState(true)
  const [ativar, setAtivar] = useState('ATIVAR')

  const clicarBotao = () =>{
    setLigar(!ligar)
    if (ligar == true){
      setAtivar('ATIVAR')
    } else if (ligar == false){
      setAtivar('DESATIVAR')
    }
  }

  return (
    <View style={styles.container}>

      <Button
        title= {ativar}
        onPress={clicarBotao}
      />

      {
        ligar ?
        <View style={styles.container2}>     
          <View style={styles.containerText2}>
            <Text style={styles.text2}>
              Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! 
            </Text>
          </View>
          <View style={styles.containerIcon2}>
            <FontAwesome name="trash-o" size={40} color="black" />
            <Ionicons name="paper-plane-outline" size={40} color="black" />
          </View>
        </View>
        :
        <Text> </Text>
      }
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20,
  },

  container2:{
    width: 320,
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',   
    borderRadius: 10,
    marginBottom: 30,
  },

  containerText2:{
    width: 230,
  },

  text2:{
    fontSize:15,
    fontWeight: '600'
  },

  containerIcon2:{
    height: 50,
    flexDirection: 'row',
  },
});
