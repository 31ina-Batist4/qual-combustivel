
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
   const [alcool, setAlcool] = useState('');
   const [gasolina, setGasolina] = useState('');
   const [resultado, setResultado] = useState('');

   const fazerCalculo = () =>{
      const tempAlcool = parseFloat(alcool);
      const tempGasolina = parseFloat(gasolina);

     if((tempGasolina * 0.7) > tempAlcool){
           setResultado('Etanol');
     }else {
           setResultado('Gasolina');
     }
   }
   


  return (
        <View  style={styles.container}>
            <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61lcaZUfH9L.png'}}
            style={styles.img}></Image>
         <Text style={styles.text1}>Gasolina ou Etanol?</Text>
         <Text style={styles.text2}>Saiba a melhor opção de abastecimento para seu veículo.</Text>
         <TextInput 
         placeholder= 'Digite o valor  do etanol' 
         keyboardType='numeric' style={styles.textInput}
         onChangeText={(value) => setAlcool(value)}></TextInput>
          <TextInput 
         placeholder= 'Digite o valor  da gasolina' 
         keyboardType='numeric'  style={styles.textInput}
         onChangeText={(value) => setGasolina(value)}></TextInput>
         
         <TouchableOpacity onPress={fazerCalculo} style={styles.btnCalc}>
          <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', color:'white', borderRadius: 15, backgroundColor: '#054f77'}}>calcular</Text>
          </TouchableOpacity>
         <Text style={styles.text}>Você deve abastecer com:</Text>
         <Text style={{fontSize: 50, fontWeight: 'bold', color:'#054f77'}}>{resultado}</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFA500',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textInput:{
    width: '80%',
    textAlign: 'center',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#DCDCDC',
    color: 'black',
    fontSize: 20, 
  },
  text1:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 43, 
  },
  text2:{
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
    color: '#054f77',
    fontSize: 20, 
  },
  text:{
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30, 
  },
  img:{
     width: 170,
     height: 170, 
  },
  btnCalc:{
   marginTop: 10,
   marginBottom: 10,
   width: 150,
   height: 40,
 },
});

export default App;
