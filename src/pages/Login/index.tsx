import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  Dimensions,
} from 'react-native';
import {HeaderLogin} from '../../components/Common/HeaderLogin';
import {ToggleSwitch} from '../../components/Common/ToggleSwitch';
import {CustomButton} from '../../components/Common/Button';
import Icon from 'react-native-vector-icons/Feather';

interface HeaderData {
  title: string;
  description: string;
}

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCpf, setRememberCpf] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(0);

  const headerData: HeaderData = {
    title: 'Instruções de Login',
    description:
      'Insira seu CPF e senha para fazer login na sua conta. Selecione a opção "Lembrar meu CPF" para salvar seu CPF para futuros logins. Clique em "Entrar" para acessar sua conta.',
  };

  const handleLogin = () => {
    // TODO: lógica de login
    console.log('submit data');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  useEffect(() => {
    // TODO: criar lógica que salva o cpf do usuário
    console.log('cpf', rememberCpf);
  }, [rememberCpf]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardDidShow = (event: any) => {
    const keyboardHeight = event.endCoordinates.height;
    const windowHeight = Dimensions.get('window').height;
    const offset = windowHeight - keyboardHeight;
    setKeyboardVerticalOffset(-offset);
  };

  const keyboardDidHide = () => {
    setKeyboardVerticalOffset(0);
  };

  return (
    <View style={styles.container}>
      <HeaderLogin data={headerData} />
      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        enabled>
        <ScrollView contentContainerStyle={styles.inputScrollContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            value={cpf}
            onChangeText={setCpf}
            placeholder="Digite seu CPF"
            keyboardType="numeric"
            style={styles.input}
          />
          <View style={styles.cpfContainer}>
            <Text style={[styles.label, {opacity: 0.8}]}>Lembrar meu CPF</Text>
            <ToggleSwitch
              value={rememberCpf}
              onToggle={() => setRememberCpf(!rememberCpf)}
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          <View style={styles.containerPassword}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Digite a sua senha"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={handleTogglePasswordVisibility}
              style={styles.eyeIconContainer}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <CustomButton
            title="Entrar"
            backgroundColor="#89cd0f"
            color="#fff"
            borderColor="#89cd0f"
            borderWidth={1}
            onPress={handleLogin}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170c3c',
    width: '100%',
    paddingLeft: 14,
    paddingRight: 14,
  },
  inputContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  inputScrollContainer: {
    top: 160,
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingLeft: 5,
    borderRadius: 5,
  },
  label: {
    color: '#89cd0f',
    marginBottom: 5,
  },
  cpfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
});
