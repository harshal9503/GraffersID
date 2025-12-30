import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../theme/colors';

export default function Loader() {
  return <ActivityIndicator size="large" color={COLORS.primary} />;
}
