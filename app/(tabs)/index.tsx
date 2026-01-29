import BrandLogo from "@/components/screen/main/brand-logo";
import CarsCatalog from "@/components/screen/main/cars-catalog";
import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header with location and profile */}
                <View style={styles.header}>
                    <View style={styles.locationContainer}>
                        <View style={styles.locationIcon}>
                            <Ionicons name="location" size={24} color="#FDB551" />
                        </View>
                        <View>
                            <Text style={styles.locationLabel}>Your location</Text>
                            <View style={styles.locationRow}>
                                <Text style={styles.locationText}>Ngangphaf,Selman</Text>
                                <Ionicons name="chevron-down" size={20} color={colorScheme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary} />
                            </View>
                        </View>
                    </View>
                    <Image 
                        source={{ uri: "https://i.pravatar.cc/150?img=12" }} 
                        style={styles.profileImage} 
                    />
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Find your favourite</Text>
                    <Text style={styles.title}>vechicle.</Text>
                </View>

                {/* Search bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color={layoutTheme.colors.neutral.dark} />
                    <TextInput
                        placeholder="Search vechicle"
                        placeholderTextColor={layoutTheme.colors.neutral.dark}
                        style={styles.searchInput}
                    />
                </View>

                {/* Brand Logos */}
                <BrandLogo />

                {/* Cars Catalog */}
                <CarsCatalog />
            </ScrollView>
        </SafeAreaView>
    )
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme === "dark" ? layoutTheme.colors.secondary : layoutTheme.colors.primary,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    locationIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: theme === "light" ? "#F5F5F5" : "#2C2C2E",
        justifyContent: "center",
        alignItems: "center",
    },
    locationLabel: {
        fontSize: 14,
        fontFamily: layoutTheme.fonts.inner.regular,
        color: theme === "light" ? layoutTheme.colors.text.muted : layoutTheme.colors.text.secondary,
        marginBottom: 2,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    locationText: {
        fontSize: 16,
        fontFamily: layoutTheme.fonts.inner.semiBold,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    titleContainer: {
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: layoutTheme.fonts.inner.semiBold,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
        lineHeight: 40,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1E",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 12,
        marginHorizontal: 16,
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        gap: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: layoutTheme.fonts.inner.regular,
        color: theme === "light" ? layoutTheme.colors.text.primary : layoutTheme.colors.text.secondary,
    },
})