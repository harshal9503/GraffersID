import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import RatingStars from './RatingStars';
import { COLORS } from '../theme/colors';

export default function CompanyCard({ company, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={company.logo} style={styles.logo} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{company.name}</Text>
        <Text style={styles.address}>{company.address}</Text>
        <RatingStars rating={company.rating} />
      </View>
      <Text style={styles.btn}>Detail Review</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: 16,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  logo: { width: 60, height: 60, marginRight: 12 },
  name: { fontWeight: '700', fontSize: 16 },
  address: { color: COLORS.gray, fontSize: 12 },
  btn: { color: COLORS.primary, fontWeight: '600' },
});
