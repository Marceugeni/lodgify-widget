import Typography from "@mui/material/Typography";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./ProgressBar.css";

function ProgressBart() {
  const now = 40;
  return (
    <>
      <div className="progress-bar-container">
        <Typography className="progress-bar-title" variant="h6">
          Lodgify grouped tasks
        </Typography>
        <div className="prog-container">
          <Typography>
            <ProgressBar now={now} label={`${now}%`} />
          </Typography>
        </div>
      </div>
    </>
  );
}

export default ProgressBart;
