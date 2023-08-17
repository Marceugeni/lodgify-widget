import Typography from "@mui/material/Typography";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./ProgressBar.css";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBart: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <>
      <div className="progress-bar-container">
        <Typography className="progress-bar-title" variant="h6">
          Lodgify grouped tasks
        </Typography>
        <div className="prog-container">
          <Typography>
            <ProgressBar now={percentage} label={`${percentage.toFixed(0)}%`} />
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ProgressBart;
