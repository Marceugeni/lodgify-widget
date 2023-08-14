import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { TaskCategories } from "./../../../src/interfaces/interfaces";
import "./AccordionComponent.css";

interface AccordionComponentProps {
  tasksData: TaskCategories[];
  
  onUpdateTotalSumValue: (totalSumValue: number) => void;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  tasksData, onUpdateTotalSumValue
}) => {
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(tasksData.length).fill(false));
  const [tasksAndValues, setTasksAndValues] = useState<{ [taskId: string]: number }>({});
  const [totalSumValue, setTotalSumValue] = useState(0)

  console.log(onUpdateTotalSumValue);
  

  // const emptyNumber  = 1
  
  const handleAccordionClick = (index: number) => {
    setIsOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };


  const handleCheckboxClick = (taskId: string, value: number) => {
    setTasksAndValues(prevValues => ({
      ...prevValues,
      [taskId]: prevValues[taskId] ? 0 : value / 227
    }));
  };

useEffect(() => {
    // Calculate the sum of values whenever tasksAndValues changes. It can be done with a useMemo but i don't know how... ;D
    const sum = Object.values(tasksAndValues).reduce((total, value) => total + value, 0);
    setTotalSumValue(sum*100);
    onUpdateTotalSumValue(sum*100)
  }, [tasksAndValues]);

  console.log("theTotalin percentage: ", totalSumValue)
  console.log("taskand", tasksAndValues)

  
  return (
    <div className="accordion-container">
      {tasksData.map((data, index) => (
        <Accordion key={data.name} expanded={isOpen[index]}>
          <AccordionSummary 
            onClick={() => handleAccordionClick(index)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="icon-group-container">
              <SummarizeIcon className="summarize-icon"></SummarizeIcon>
              <Typography>{data.name}</Typography>
            </div>
            <div className="show-hide">
              <Typography>{isOpen[index] ? "hide" : "show"}</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {data.tasks.map((task) => (
              <div key={task.description} className="checkbox-container">
                <input 
                  type="checkbox"
                  onChange={() => handleCheckboxClick(task.description, task.value)} />
                <Typography className="checkbox-description">
                  {task.description}
                </Typography>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
