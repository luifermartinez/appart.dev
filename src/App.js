import { createTheme, ThemeProvider } from "@mui/material/styles"
import Layout from "@/layouts/Layout"
import { useTheme } from "@mui/material"

function App() {
  // eslint-disable-next-line no-unused-vars
  const { palette } = useTheme()

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FFF058",
        light: "#FFF37E",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
