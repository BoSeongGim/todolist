import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import UploadButton from './components/UploadButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AWS S3 업로드 앱</Text>
      <UploadButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
