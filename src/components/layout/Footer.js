import React, { memo } from "react";
const Footer = ({ TaskStatus }) => {
  return (
    <div id="footer">
      <div className="bg-light pt-2 pb-2 px-3 mt-3">
        <div className="row align-items-center">
          <p className="col-4 order-1 mb-0">
            {TaskStatus.taskLenght}{" "}
            {TaskStatus.taskLenght === 1 ? "task" : "tasks"}
          </p>
          <p className="col-4 order-2 text-center mb-0">
            {TaskStatus.donetaskLength} complete
          </p>
          <p className="col-4 order-last text-end mb-0">
            {TaskStatus.openLength} open
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);