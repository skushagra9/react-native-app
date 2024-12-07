import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function TermsOfService() {
  return (
    <View style={{ padding: 20 }}>
        <Button title="Go Back" onPress={() => router.back()} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Terms of Service</Text>
      <Text style={{ marginTop: 10 }}>
        By using this app, you agree to the following terms:
      </Text>
      <Text style={{ marginTop: 10 }}>
        1. You must use the app in compliance with all laws.{'\n'}
        2. We are not responsible for any damage caused by improper use of the app.{'\n'}
        3. Other terms and conditions...
      </Text>
    </View>
  );
}
