import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function PrivacyPolicy() {
    const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
        <Button title="Go Back" onPress={() => router.back()} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Privacy Policy</Text>
      <Text style={{ marginTop: 10 }}>
        We respect your privacy and are committed to protecting your personal data.
      </Text>
      <Text style={{ marginTop: 10 }}>
        - We collect personal information only for necessary operations.{'\n'}
        - We do not share your data with third parties without your consent.
      </Text>
    </View>
  );
}
