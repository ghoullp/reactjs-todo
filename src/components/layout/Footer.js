const Footer = ({ todos, doneTask }) => {
  return (
    <div id="footer">
      <div className="bg-light pt-2 pb-2 px-3 mt-3">
        <div className="row align-items-center">
          <p className="col-4 order-1 mb-0">
            {todos} {todos === 1 ? "task" : "tasks"}
          </p>
          <p className="col-4 order-2 text-center mb-0">
            {doneTask} complete
          </p>
          <p className="col-4 order-last text-end mb-0">
            {todos - doneTask} open
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
