import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderLogin} from '../../components/Common/HeaderLogin';
import {CustomButton} from '../../components/Common/Button';

const headerData = {
  title: 'Instruções de Login',
  description:
    'Insira seu CPF e senha para fazer login na sua conta. Selecione a opção "Lembrar meu CPF" para salvar seu CPF para futuros logins. Clique em "Entrar" para acessar sua conta.',
};

export default function PreLogin() {
  return (
    <View style={styles.container}>
      <HeaderLogin data={headerData} />

      <View style={styles.contolContainer}>
        <CustomButton
          title="Acessar Conta"
          backgroundColor="#89cd0f"
          color="#fff"
          borderColor="#89cd0f"
          borderWidth={1}
        />
        <CustomButton
          title="Abrir Conta Gratuita"
          backgroundColor="transparent"
          color="#89cd0f"
          borderColor="#89cd0f"
          borderWidth={1}
        />
      </View>
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
  contolContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
