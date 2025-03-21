import { Stack } from 'expo-router';
import {useSession} from "@/hooks/useSession";

export default function HomeLayout() {
  const { user } = useSession();

  return (
      <Stack
          screenOptions={{
            headerShown: false,
            animation: 'none'
          }}
      >
        <Stack.Screen name="auth" redirect={user != null} />
        <Stack.Screen name="pages" redirect={user == null} />
      </Stack>
  );
}
