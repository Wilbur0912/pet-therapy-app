import React from 'react';
import { View, Text, Button } from 'react-native';

export default function BookingSuccessScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>預約成功！</Text>
      <Button title="回首頁" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
