import Testimonial from "./Testimonial";

import classes from "./Testimonials.module.scss";

const testimonials = [
  {
    id: 1,
    image: "images/icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    image: "images/icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    image: "images/icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    image: "images/icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Testimonials = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <h2 className={classes.title}>Why choose EasyBank?</h2>
          <p className={classes.text}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control you finances like never before.
          </p>
        </div>
        <div className={classes.testimonials}>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
