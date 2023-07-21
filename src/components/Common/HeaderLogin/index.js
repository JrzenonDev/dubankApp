import React from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Modal} from 'react-native';
import {CustomButton} from '../Button';
import Icon from 'react-native-vector-icons/Feather';

export function HeaderLogin({data}) {
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const {title, description} = data;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => setHelpModalVisible(true)}
        style={styles.helpIcon}>
        <Icon name="help-circle" size={25} color="#89cd0f" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/logo-dubank.png')}
          style={{width: 110, height: 110}}
        />
      </View>
      <Modal
        visible={helpModalVisible}
        animationType="fade"
        style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{description}</Text>
            <CustomButton
              title="Fechar"
              backgroundColor="#89cd0f"
              color="#fff"
              borderColor="#89cd0f"
              borderWidth={1}
              onPress={() => setHelpModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    zIndex: 2,
  },
  helpIcon: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 0,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  modal: {
    backgroundColor: '#efefef',
  },
  modalContainer: {
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#efefef',
  },
  modalContent: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 40,
  },
});
