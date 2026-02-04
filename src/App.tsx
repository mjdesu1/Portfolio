import "./App.css";
import Header from "./components/Header";
import ToggleMode from "./components/ToggleMode";
import Content from "./components/Content";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen w-full items-center bg-background text-foreground transition-colors duration-300">
        <div className="relative w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <Header />
          <ToggleMode />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
