import { Stack } from 'expo-router';

export default function AccountLayout() {
  return (
    <Stack
    screenOptions={{
        headerShown: false,
    }}
    >
     
      <Stack.Screen 
        name="privacy" 
        options={{ title: 'Privacy Policy' }} // Privacy policy page
      />
      <Stack.Screen 
        name="termsofservice" 
        options={{ title: 'Terms of Service' }} // Terms of Service page
      />
      <Stack.Screen 
        name="liscences" 
        options={{ title: 'Licenses' }} // Licenses page
      />
    </Stack>
  );
}
