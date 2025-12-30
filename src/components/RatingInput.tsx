import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';

interface Props {
  rating: number;
  onChange: (value: number) => void;
}

export default function RatingInput({ rating, onChange }: Props) {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <TouchableOpacity key={i} onPress={() => onChange(i)}>
          <Text
            style={{
              fontSize: 26,
              color: i <= rating ? COLORS.star : COLORS.gray,
            }}
          >
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
