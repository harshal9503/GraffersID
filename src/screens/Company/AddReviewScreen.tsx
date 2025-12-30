import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RatingInput from '../../components/RatingInput';
import { COLORS } from '../../theme/colors';

export default function AddReviewScreen({ navigation, route }: any) {
  const { addReview } = route.params;

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const submit = () => {
    addReview({
      name,
      subject,
      text,
      rating,
      date: new Date().toISOString().split('T')[0],
    });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Full Name</Text>
      <TextInput style={input} value={name} onChangeText={setName} />

      <Text>Subject</Text>
      <TextInput style={input} value={subject} onChangeText={setSubject} />

      <Text>Review</Text>
      <TextInput
        style={[input, { height: 80 }]}
        value={text}
        onChangeText={setText}
        multiline
      />

      <Text>Rating</Text>
      <RatingInput rating={rating} onChange={setRating} />

      <Button title="Submit Review" color={COLORS.primary} onPress={submit} />
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderColor: '#DDD',
  borderRadius: 8,
  padding: 10,
  marginBottom: 12,
};
