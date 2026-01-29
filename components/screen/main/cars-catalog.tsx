import CarsCard from "@/components/ui/cars-card";
import { layoutTheme } from "@/constant/theme";
import { carModels } from "@/data/car-models";
import { useTheme } from "@/hooks/use-theme";
import { CarModel } from "@/types/car-types";
import { ThemeType } from "@/types/theme-types";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CarsCatalog() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);

    const shuffleCars = (array: CarModel[])=>{
        const shuffled = [...array].sort(()=> Math.random() - 0.5);
        return shuffled.slice(0, 6);
    }

    const [cars, setCars] = useState(()=> shuffleCars(carModels));
    const [refreshing, setRefreshing] = useState(false);

    const onReflesh = async()=>{
        setRefreshing(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCars(shuffleCars(carModels));
        setRefreshing(false)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Available Near You</Text>
                <TouchableOpacity>
                    <Text style={styles.headerSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={cars}
                renderItem={({ item }) => <CarsCard carModel={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.modelsContainer}
                refreshing={refreshing}
                onRefresh={onReflesh}
            />
        </View>
    )
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 22,
        fontFamily: layoutTheme.fonts.inner.semiBold,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
    },
    headerSeeAll: {
        fontSize: 16,
        fontFamily: layoutTheme.fonts.inner.regular,
        color: layoutTheme.colors.accent,
    },
    modelsContainer: {
        gap: 12,
    },
})