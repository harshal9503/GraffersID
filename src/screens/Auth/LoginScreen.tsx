import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Login</Text>

      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <Button title="Login" color={COLORS.primary} />

      <Text
        style={{ marginTop: 16, color: COLORS.primary }}
        onPress={() => navigation.navigate('Signup')}
      >
        Don't have an account? Signup
      </Text>
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderColor: '#DDD',
  borderRadius: 8,
  padding: 10,
  marginTop: 12,
};
