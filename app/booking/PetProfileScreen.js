import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PetProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>寵物檔案頁</Text>
      <Button title="我要見牠" onPress={() => navigation.navigate('BookingForm')} />
    </View>
  );
}
