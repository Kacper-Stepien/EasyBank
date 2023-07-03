import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

import classes from "./App.module.scss";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <Header />
        <Testimonials />
        <Articles />
        <Footer />
      </div>
    </>
  );
}

export default App;
