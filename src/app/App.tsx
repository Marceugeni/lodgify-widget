import AccordionComponent from "../components/Accordion/AccordionComponent";
import ProgressBart from "../components/ProgressBar/ProgressBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasksData, setTasksData] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    async function fetchTasksData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasksData(data);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    }
    fetchTasksData();
  }, []);

  const updateTotalSumValue = (newValue: number) => {
    setPercentage(newValue);
  };

  return (
    <>
      <div className="app-container">
        <div className="widget-container">
          <ProgressBart percentage={percentage} />
          <AccordionComponent
            tasksData={tasksData}
            onUpdateTotalSumValue={updateTotalSumValue}
          />
        </div>
      </div>
    </>
  );
}

export default App;
