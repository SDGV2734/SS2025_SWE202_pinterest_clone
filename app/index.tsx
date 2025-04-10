import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MasonryFeed from '@/components/MasonryFeed';
import { View, Text } from 'react-native';

const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="All" component={MasonryFeed} />
      <TopTabs.Screen name="Wallpaper" component={MasonryFeed} />
      <TopTabs.Screen name="Lionel Messi Wallpapers" component={MasonryFeed} />
    </TopTabs.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="Home" component={TopTabNavigator} />
          <BottomTabs.Screen name="Search" component={() => <Text>Search</Text>} />
          <BottomTabs.Screen name="Create" component={() => <Text>Create</Text>} />
          <BottomTabs.Screen name="Chat" component={() => <Text>Chat</Text>} />
          <BottomTabs.Screen name="Profile" component={() => <Text>Profile</Text>} />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
