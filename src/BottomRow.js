import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [passes, setPasses] = useState(0)


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Pass %</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Passes</h3>
        <div className="toGo__value">{passes}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Passes</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Pass %</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
  );
};

export default BottomRow;
