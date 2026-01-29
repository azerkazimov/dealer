import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { CarModel } from "@/types/car-types";
import { ThemeType } from "@/types/theme-types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function CarsCard({ carModel }: { carModel: CarModel }) {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    
    // Generate random rating and review count for demo
    const rating = (4.0 + Math.random() * 0.9).toFixed(1);
    const reviews = Math.floor(Math.random() * 200) + 50;
    
    return (
        <View style={styles.container}>
            <Image source={{ uri: carModel.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>
                    {carModel.brand} {carModel.model}
                </Text>
                <View style={styles.footer}>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#FDB551" />
                        <Text style={styles.ratingText}>
                            {rating}
                            <Text style={styles.reviewText}>[{reviews}+ Review]</Text>
                        </Text>
                    </View>
                    <Text style={styles.priceText}>
                        ${carModel.pricePerDay.toLocaleString()}
                        <Text style={styles.pricePeriod}> /day</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1E",
        borderRadius: 16,
        padding: 12,
        width: 340,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 12,
        marginBottom: 12,
    },
    content: {
        gap: 8,
    },
    title: {
        fontSize: 18,
        fontFamily: layoutTheme.fonts.inner.semiBold,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    ratingText: {
        fontSize: 16,
        fontFamily: layoutTheme.fonts.inner.semiBold,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
    },
    reviewText: {
        fontSize: 14,
        fontFamily: layoutTheme.fonts.inner.regular,
        color: layoutTheme.colors.text.muted,
    },
    priceText: {
        fontSize: 18,
        fontFamily: layoutTheme.fonts.inner.bold,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
    },
    pricePeriod: {
        fontSize: 14,
        fontFamily: layoutTheme.fonts.inner.regular,
        color: layoutTheme.colors.text.muted,
    },
})