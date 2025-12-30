import React from 'react';
import { FlatList } from 'react-native';
import CompanyCard from '../../components/CompanyCard';
import { companies } from '../../data/companies';

export default function HomeScreen({ navigation }: any) {
  return (
    <FlatList
      data={companies}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CompanyCard
          company={item}
          onPress={() => navigation.navigate('CompanyDetail', item)}
        />
      )}
    />
  );
}
