import Button from "./utils/Button";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={`${classes.column} ${classes.info}`}>
          <h1 className={classes.heading}>Next generation digital banking</h1>
          <p className={classes.paragraph}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
        <div className={`${classes.column} ${classes.photos}`}>
          <img src="images/image-mockups.png" alt="bg-intro-desktop" />
        </div>
      </div>
    </div>
  );
};

export default Header;
