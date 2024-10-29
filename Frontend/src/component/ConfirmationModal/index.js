import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style.js'; // Import your style file

const ConfirmationModal = ({isVisible, confirm, cancel}) => {
  if (!isVisible) return null; // Hide the modal if isVisible is false

  return (
    <View style={styles.overlay}>
      <View style={styles.main}>
        <Text style={styles.modalTitle}>{ModalTitle}</Text>
        <View style={styles.popup}>
          <TouchableOpacity
            style={[styles.button, styles.yesButton]}
            onPress={confirm}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={cancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationModal;
