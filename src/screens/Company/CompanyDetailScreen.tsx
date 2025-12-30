import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import RatingStars from '../../components/RatingStars';

export default function CompanyDetailScreen({ route, navigation }: any) {
  const company = route.params;
  const [reviews, setReviews] = useState(company.reviews);

  const avgRating = useMemo(() => {
    if (!reviews.length) return 0;
    return (
      reviews.reduce((a: number, b: any) => a + b.rating, 0) / reviews.length
    ).toFixed(1);
  }, [reviews]);

  const addReview = (review: any) => {
    setReviews(prev => [review, ...prev]);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>{company.name}</Text>
      <Text>Average Rating: {avgRating}</Text>
      <RatingStars rating={Number(avgRating)} />

      <Button
        title="+ Add Review"
        onPress={() =>
          navigation.navigate('AddReview', {
            addReview,
          })
        }
      />

      <FlatList
        data={reviews}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: '600' }}>
              {item.name} – {item.subject}
            </Text>
            <RatingStars rating={item.rating} />
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
