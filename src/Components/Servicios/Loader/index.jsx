import "./styles.scss";

export const Loader = ({ size = 20 }) => {
  return (
    <div style={{ width: size, height: size }} className="spinnermp" />
  );
};
