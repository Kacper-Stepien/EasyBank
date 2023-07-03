import classes from "./Testimonial.module.scss";

type TestimonialProps = {
  testimonial: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
};

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className={classes.testimonial}>
      <img src={testimonial.image} alt={testimonial.title} />
      <h2 className={classes.title}>{testimonial.title}</h2>
      <p className={classes.text}>{testimonial.description}</p>
    </div>
  );
};

export default Testimonial;
