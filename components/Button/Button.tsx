import React, { PropsWithChildren } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = (props: any) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 50,
    marginVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
  },
});

export default Button;
