import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SummarizeIcon from "@mui/icons-material/Summarize";
import './AccordionComponent.css'
import { useState } from "react";

function AccordionComponent() {

  const [isOpen, setIsOpen] = useState(false) 

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion-container">
      <Accordion>
        <AccordionSummary
          onClick={handleAccordionClick}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="icon-group-container">
            <SummarizeIcon className="summarize-icon"></SummarizeIcon>
            <Typography>Group 1</Typography>
          </div>
          <div className="show-hide">
            {isOpen ? <Typography>hide</Typography> : <Typography>show</Typography>  }
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="icon-group-container">
            <SummarizeIcon className="summarize-icon"></SummarizeIcon>
            <Typography>Group 1</Typography>
          </div>
          <div className="show-hide">
            <Typography>show</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="icon-group-container">
            <SummarizeIcon className="summarize-icon"></SummarizeIcon>
            <Typography>Group 1</Typography>
          </div>
          <div className="show-hide">
            <Typography>show</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
