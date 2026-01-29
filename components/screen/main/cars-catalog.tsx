import CarsCard from "@/components/ui/cars-card";
import { layoutTheme } from "@/constant/theme";
import { carModels } from "@/data/car-models";
import { useTheme } from "@/hooks/use-theme";
import { useBrandStore } from "@/store/brand.store";
import { CarModel } from "@/types/car-types";
import { ThemeType } from "@/types/theme-types";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CarsCatalog() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    const { brands } = useBrandStore();

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

    // Get filtered cars based on selected brand
    const getDisplayCars = () => {
        if (brands.length > 0) {
            // Filter all car models by the selected brand
            return carModels.filter(car => car.brandSlug === brands[0]);
        }
        // Show shuffled cars when no brand is selected
        return cars;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Available Near You</Text>
                <TouchableOpacity>
                    <Text style={styles.headerSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={getDisplayCars()}
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
        marginBottom: 24,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 12,
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
        gap: 16,
        paddingHorizontal: 16,
    },
})