import React from "react";
import { ProgressBar } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <ProgressBar
        height="50"
        width="50"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="black"
        barColor="bloack"
      />
    </div>
  );
}

export default Loader;
