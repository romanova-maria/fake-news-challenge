import { primaryTheme as theme, ThemeProvider } from "./styles";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
