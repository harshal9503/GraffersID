import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import AddCompanyScreen from '../screens/Company/AddCompanyScreen';
import CompanyDetailScreen from '../screens/Company/CompanyDetailScreen';
import AddReviewScreen from '../screens/Company/AddReviewScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* Companies Stack */
function CompanyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CompanyList"
        component={HomeScreen}
        options={{ title: 'Companies' }}
      />
      <Stack.Screen
        name="CompanyDetail"
        component={CompanyDetailScreen}
        options={{ title: 'Company Detail' }}
      />
      <Stack.Screen
        name="AddReview"
        component={AddReviewScreen}
        options={{ title: 'Add Review' }}
      />
    </Stack.Navigator>
  );
}

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Companies" component={CompanyStack} />
      <Tab.Screen
        name="AddCompany"
        component={AddCompanyScreen}
        options={{ title: 'Add Company' }}
      />
    </Tab.Navigator>
  );
}
