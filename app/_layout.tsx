import ThemeProvider from "@/context/theme-povider";
import LayoutContent from "@/layout/layout-content";


export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  )
}
