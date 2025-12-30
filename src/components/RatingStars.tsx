import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../theme/colors';

export default function RatingStars({ rating }: { rating: number }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: COLORS.star }}>★★★★★</Text>
      <Text style={{ marginLeft: 6 }}>{rating}</Text>
    </View>
  );
}
