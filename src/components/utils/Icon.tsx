import classes from "./Icon.module.scss";

type IconProps = {
  children: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({ children }) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>{children}</span>
    </button>
  );
};

export default Icon;
