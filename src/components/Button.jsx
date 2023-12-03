const Button = ({ handleLoadMore }) => {
  return (
    <div className="buttonDiv">
      <button className="Button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
