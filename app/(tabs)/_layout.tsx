import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeViewGestureHandler>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="user"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={"#007F73"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={"#007F73"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "settings" : "settings-outline"}
                color={"#007F73"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="token"
          options={{
            title: "Token",
            tabBarButton: () => null,
            tabBarIconStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            tabBarButton: () => null,
            tabBarIconStyle: { display: "none" },
          }}
        />
      </Tabs>
    </NativeViewGestureHandler>
  );
}
