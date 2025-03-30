import React, { useState } from 'react';
import { supabase } from '../../supabase/init';

import { View, Text, Button, TextInput } from 'react-native';

export default function BookingFormScreen({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleBooking = async () => {
        const { error } = await supabase.from('appointments').insert([
            { name, phone }
        ]);
        if (!error) {
            navigation.navigate('BookingSuccess');
        } else {
            alert('預約失敗，請稍後再試' + error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>預約表單</Text>
            <TextInput
                placeholder="名字"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
            />
            <TextInput
                placeholder="電話"
                value={phone}
                onChangeText={setPhone}
                style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
            />
            <Button title="送出預約" onPress={handleBooking} />
        </View>
    );
}
