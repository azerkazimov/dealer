import { layoutTheme } from "@/constant/theme";
import { carLogos } from "@/data/car-logo";
import { useTheme } from "@/hooks/use-theme";
import { useBrandStore } from "@/store/brand.store";
import { ThemeType } from "@/types/theme-types";
import { Image } from "expo-image";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BrandLogo() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    const { brands, setBrands } = useBrandStore();

    const handleBrandPress = (slug: string) => {
        // Toggle brand selection: if already selected, deselect it; otherwise select it
        if (brands.includes(slug)) {
            setBrands([]);
        } else {
            setBrands([slug]);
        }
    };

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
                renderItem={({ item }) => {
                    const isSelected = brands.includes(item.slug);
                    return (
                        <TouchableOpacity 
                            style={[styles.logoContainer, isSelected && styles.logoContainerSelected]} 
                            onPress={() => handleBrandPress(item.slug)}
                        >
                            <Image source={{ uri: item.image.source }} style={styles.logo} />
                        </TouchableOpacity>
                    );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.brandsContainer}
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
    brandsContainer: {
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    logoContainer: {
        width: 110,
        height: 90,
        borderRadius: 12,
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1E",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",

    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    logoContainerSelected: {
        borderWidth: 2,
        borderColor: layoutTheme.colors.accent,
    },

})