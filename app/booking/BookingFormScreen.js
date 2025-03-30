import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function BookingFormScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>預約表單</Text>
      <TextInput placeholder="名字" style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} />
      <TextInput placeholder="電話" style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} />
      <Button title="送出預約" onPress={() => navigation.navigate('BookingSuccess')} />
    </View>
  );
}
