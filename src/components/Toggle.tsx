import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div>
      <div className="toggle-container">
        <input
          type="checkbox"
          className="toggle"
          id="check"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check"></label>
      </div>
    </div>
  );
};

export default Toggle;
