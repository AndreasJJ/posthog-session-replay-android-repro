import { Stack } from 'expo-router';
import {useSession} from "@/hooks/useSession";
import {usePostHog} from "posthog-react-native";
import {useEffect} from "react";

export default function HomeLayout() {
  const { user } = useSession();
  const analytics = usePostHog();

  useEffect(() => {
    analytics.identify(user)
  }, [user]);

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
