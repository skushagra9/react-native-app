import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Licenses() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Button title="Go Back" onPress={() => router.back()} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Licenses</Text>
      <Text style={{ marginTop: 10 }}>
        This application uses open-source software. Here are some of the
        licenses:
      </Text>
      <Text style={{ marginTop: 10 }}>
        1. React Native - MIT License{"\n"}
        2. Expo - MIT License{"\n"}
        3. Other dependencies...
      </Text>
    </View>
  );
}
