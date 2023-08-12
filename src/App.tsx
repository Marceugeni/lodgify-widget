import AccordionComponent from "./components/Accordion/AccordionComponent";
import ProgressBart from "./components/ProgressBar/ProgressBar";
import "./App.css";


function App() {
  return (
    <>
      <div className="app-container">
        <div className="widget-container">
          <ProgressBart />
          <AccordionComponent />
        </div>
      </div>
    </>
  );
}

export default App;
