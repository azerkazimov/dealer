import BrandLogo from "@/components/screen/main/brand-logo";
import CarsCatalog from "@/components/screen/main/cars-catalog";
import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    return (
        <SafeAreaView style={styles.container}>
            <BrandLogo/>
            <CarsCatalog/>
        </SafeAreaView>
    )
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        gap: 24,
        paddingHorizontal: 16,
        backgroundColor: theme === "dark" ? layoutTheme.colors.secondary : layoutTheme.colors.primary,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: layoutTheme.fonts.inner.regular,
    },
})