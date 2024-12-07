import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Account() {
  const router = useRouter();

  return (
    <View>
      <Text>About Section</Text>
      
      <Button title="Go to Privacy Policy" onPress={() => router.push('/(about)/privacy')} />
      <Button title="Go to Terms of Service" onPress={() => router.push('/(about)/termsofservice')} />
      <Button title="Go to Licenses" onPress={() => router.push('/(about)/liscences')} />
    </View>
  );
}
