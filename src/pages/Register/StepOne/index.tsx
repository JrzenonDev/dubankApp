import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton} from '../../../components/Common/Button';

export default function StepOne() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nextStep, setNextStep] = useState(0);
  console.log(nextStep);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBackStept}>
        <Text>&lt; Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Boas-Vindas</Text>
      <Text style={styles.text}>
        Para abrir sua conta na DuBank é muito simples!
      </Text>
      <Text style={styles.text}>
        Basta preencher os dados abaixo e pronto sua conta já está aberta
      </Text>
      <Text style={styles.text}>1/3</Text>
      <Text style={styles.textLabel}>Nome Completo</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome completo"
        keyboardType="default"
        style={styles.input}
      />

      <Text style={styles.textLabel}>Data de nascimento</Text>
      <TextInput
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        style={styles.input}
      />
      <CustomButton
        title="Continuar"
        backgroundColor="#170c3c"
        color="#fff"
        borderColor="#170c3c"
        borderWidth={1}
        onPress={() => setNextStep(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 60,
    paddingLeft: 14,
    paddingRight: 14,
  },
  buttonBackStept: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
    color: '#170c3c',
  },
  text: {
    fontSize: 16,
    color: '#231845',
    marginBottom: 20,
  },
  textLabel: {
    fontSize: 16,
    color: '#231845',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
});
