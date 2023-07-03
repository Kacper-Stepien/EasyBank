import classes from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
