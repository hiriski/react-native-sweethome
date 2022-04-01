import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { createHello } from '../../lib/hello';

const HomeComponent: FC = () => {
  return <Text style={styles.text}>{createHello('Riski')}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default HomeComponent;
