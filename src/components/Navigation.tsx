import classes from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <ul className={classes.navigation}>
      <li className={classes.element}>Home</li>
      <li className={classes.element}>About</li>
      <li className={classes.element}>Contact</li>
      <li className={classes.element}>Blog</li>
      <li className={classes.element}>Careers</li>
    </ul>
  );
};

export default Navigation;
