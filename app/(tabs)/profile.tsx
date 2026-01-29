import { Platform, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from 'expo-location';
import * as Device from "expo-device";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useEffect, useState } from "react";

export default function Profile() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg("Oops, this will not work on Snack or in the Expo app that comes with React Native!");
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
        getCurrentLocation();
    }, [])

    if (errorMsg) {
        return <Text>{errorMsg}</Text>
    }

    if (!location) {
        return <Text>Loading...</Text>
    }

    return (
        <SafeAreaView>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                // showsCompass={true}
                // showsScale={true}
                // showsTraffic={true}
                // showsBuildings={true}
            >
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    title="You are here"
                    description={`Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`}
                />
            </MapView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    }

})