import React from "react";
import "../stylesheets/application.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Store from "./Store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
    };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { windowWidth } = this.state;
    return (
      <div className="flex flex-col h-screen justify-between overflow-y-scroll">
        <NavBar width={windowWidth} />
        <main className="w-full max-w-screen-xl mx-auto flex-grow">
          <Store />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
