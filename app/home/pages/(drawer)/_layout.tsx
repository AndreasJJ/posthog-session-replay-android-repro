import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
      <Drawer
          screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
            drawerStyle: {
              width: '100%'
            }
          }}
          useLegacyImplementation={false}
      />
  );
}
