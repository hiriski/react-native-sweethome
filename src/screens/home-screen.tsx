import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeComponent } from '../components/home';

const HomeScreen: FC = () => {
  return (
    <View style={styles.root}>
      <HomeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
