import { layoutTheme } from "@/constant/theme";
import { carLogos } from "@/data/car-logo";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { Image } from "expo-image";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BrandLogo() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Top Brands</Text>
                <TouchableOpacity>
                    <Text style={styles.headerSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={carLogos}
                renderItem={({ item }) => <View style={styles.logoContainer}>
                    <Image source={{ uri: item.image.source }} style={styles.logo} />
                </View>}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.brandsContainer}
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
    brandsContainer: {
        marginTop: 10,
        flexGrow: 1,
        gap: 10,
        paddingVertical: 10,
    },
    logoContainer: {
        width: 83,
        height: 67,
        borderRadius: 10,
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1E",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

})