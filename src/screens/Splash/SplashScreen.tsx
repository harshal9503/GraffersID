import React from 'react';
import { View, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/splash.jpeg')} />
    </View>
  );
}
