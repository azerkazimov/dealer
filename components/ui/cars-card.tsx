import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { CarModel } from "@/types/car-types";
import { ThemeType } from "@/types/theme-types";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function CarsCard({ carModel }: { carModel: CarModel }) {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    return (
        <View style={styles.container}>
            <Image source={{ uri: carModel.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{carModel.model}</Text>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>{carModel.type}</Text>
                    <Text style={styles.detailsText}>{carModel.pricePerDay}</Text>
                </View>
            </View>
        </View>
    )
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 12,
    },
    image: {
        width: 275,
        height: 144,
        borderRadius: 12,
    },
    content: {
        gap: 4,
    },
    title: {
        fontSize: 18,
        fontFamily: layoutTheme.fonts.inner.semiBold,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailsText: {
        fontSize: 16,
        fontFamily: layoutTheme.fonts.inner.regular,
    },


})