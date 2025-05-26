import { Redirect } from "expo-router";
import { Stack } from "expo-router";

export default function Home() {
  // Redirigir a la pantalla de login
  return <Redirect href="/login" />;
}

// Configuración global del Stack Navigator
export function Layout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
