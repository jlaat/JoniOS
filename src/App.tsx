import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Icons from "./components/Icons/Icons";
import Terminal from "./components/terminal/Terminal";
import Projects from "./components/projects/Projects";
import Guestbook from "./components/guestbook/Guestbook";

function App() {
  const [displayTerminal, setDisplayTerminal] = useState(false);
  const [displayProjects, setDisplayProjects] = useState(true);
  const [displayGuestbook, setDisplayGuestbook] = useState(false);
  const [tabs, setTabs] = useState([
    { name: "terminal", zIndex: 1 },
    { name: "projects", zIndex: 3 },
    { name: "guestbook", zIndex: 2 },
  ]);

  // Logic behind tab z-indexes
  const handleSetActiveTab = (tabName: string) => {
    const newTabs = tabs.map((tab) => {
      if (tab.name === tabName) {
        return { ...tab, zIndex: 3 };
      } else if (tab.zIndex === 3) {
        return { ...tab, zIndex: 2 };
      } else {
        return { ...tab, zIndex: 1 };
      }
    });
    setTabs(newTabs);
  };

  return (
    <div className="App">
      <Header />
      <Icons
        renderTerminal={setDisplayTerminal}
        renderProjects={setDisplayProjects}
        renderGuestbook={setDisplayGuestbook}
        handleSetActiveTab={handleSetActiveTab}
      />
      <Terminal
        display={displayTerminal}
        setDisplay={setDisplayTerminal}
        zindex={tabs.find((tab) => tab.name === "terminal")?.zIndex}
      />
      <Projects
        display={displayProjects}
        setDisplay={setDisplayProjects}
        zindex={tabs.find((tab) => tab.name === "projects")?.zIndex}
      />
      <Guestbook
        display={displayGuestbook}
        setDisplay={setDisplayGuestbook}
        zindex={tabs.find((tab) => tab.name === "guestbook")?.zIndex}
      />
    </div>
  );
}

export default App;
