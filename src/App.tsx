import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";

import classes from "./App.module.scss";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <Header />
        <Testimonials />
        <Articles />
      </div>
    </>
  );
}

export default App;
