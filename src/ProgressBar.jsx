import * as React from 'react';


export function ProgressBar({ progressData }) {
  const styles = {
    width: progressData.value
  };

  return (

    <div className="project-container">
      <div className="progressvalue-container">

        <h6>{progressData.title}</h6>
        <h6>{progressData.value}</h6>
      </div>
      <div className="progress">
        <div className={progressData.className} role="progressbar" style={styles} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </div>

  );
}
