import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';



export default function App() {

    const [text, onChangeText] = React.useState("");
    const [tel, onChangeTel] = React.useState(null);
  

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}
      >Mini Agenda-Telefônica</Text>
      <TextInput
       style={styles.input}
       placeholder="Digite o nome que deseja salvar"
       onChangeText={onChangeText}
       value={text}
      />
      <TextInput
       style={styles.input}
       onChangeText={onChangeTel}
       value={tel}
       placeholder="Por favor, digite o número"
       keyboardType="numeric"
      />
      <StatusBar style="auto" />

      <Button 
      color="#f194ff"
      title="SALVAR"
      onPress={() => Alert.alert(`"Você acabou de salvar o contato de ${text}! :)`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4FC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
  },

});
