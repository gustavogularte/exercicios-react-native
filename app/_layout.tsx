import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Início',
            title: 'Bem vindo!',
            drawerIcon: () => <Ionicons name="home" size={18} color="blue" />,
          }}
        />
        <Drawer.Screen
          name="primeiro"
          options={{
            drawerLabel: 'Primeiro componente',
            title: 'Primeiro',
            drawerIcon: () => <Ionicons name="heart" size={18} color="blue" />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
