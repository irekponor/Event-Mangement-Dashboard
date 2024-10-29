import "./Toggle.css";

interface ToggleProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div>
      <div className="toggle-container flex items-center">
        <input
          type="checkbox"
          className="toggle"
          id="check"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check"></label>
        <h6 className="xl:font-normal text-custom-color1 xl:text-[15px] text-[19px] font-normal">
          Dark Mode
        </h6>
      </div>
    </div>
  );
};

export default Toggle;
