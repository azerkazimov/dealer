import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false,title: "", tabBarIcon: ()=>(
                <Ionicons name="location" size={24} color="gray" />
            ) }} />
            <Tabs.Screen name="favorite" options={{ headerShown: false,title: "", tabBarIcon: ()=>(
                <Ionicons name="heart" size={24} color="gray" />
            ) }} />
            <Tabs.Screen name="notifications" options={{ headerShown: false, title: "", tabBarIcon: ()=>(
                <Ionicons name="notifications" size={24} color="gray" />
            ) }} />
            <Tabs.Screen name="profile" options={{ headerShown: false, title: "", tabBarIcon: ()=>(
                <Ionicons name="person" size={24} color="gray" />
            ) }} />
        </Tabs>
    )
}