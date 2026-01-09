import "./App.css";
import Header from "./components/Header";
import ToggleMode from "./components/ToggleMode";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-white">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-4">
        <Header />
        <ToggleMode />
        <Content />
      </div>
    </div>
  );
}

export default App;
