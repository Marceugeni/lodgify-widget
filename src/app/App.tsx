
import AccordionComponent from "../components/Accordion/AccordionComponent";
import ProgressBart from "../components/ProgressBar/ProgressBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
const [tasksData, setTasksData] = useState([]);
const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    async function fetchTasksData() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasksData(data);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    }
    fetchTasksData();
  }, []);

  const updateTotalSumValue = (newValue:number) => {
    setPercentage(newValue);
  };

  console.log("percentage", percentage)

  return (
    <>
      <div className="app-container">
        <div className="widget-container">
          <ProgressBart percentage={percentage}/>
          <AccordionComponent 
            tasksData={tasksData}
            onUpdateTotalSumValue={updateTotalSumValue} />
        </div>
      </div>
    </>
  );
}

export default App;
