import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function SignupScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Signup</Text>

      <TextInput placeholder="Full Name" style={input} />
      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <Button title="Create Account" color={COLORS.primary} />

      <Text
        style={{ marginTop: 16, color: COLORS.primary }}
        onPress={() => navigation.goBack()}
      >
        Already have an account? Login
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
