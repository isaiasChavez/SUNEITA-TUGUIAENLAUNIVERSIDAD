import React from "react";

const Progress = ({ porcentaje }) => {
  return (
    <div class="progress fixed-top">
      <div
        class="progress-bar rounded-0"
        role="progressbar"
        style={{ width: porcentaje + "%" }}
        aria-valuenow={porcentaje}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {porcentaje}%
      </div>
    </div>
  );
};

export default Progress;
