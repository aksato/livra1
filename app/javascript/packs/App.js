import React from "react";
import "../stylesheets/application.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Store from "./Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GenericPage = (props) => (
  <h1 className="text-center p-4 text-lg">{props.title}</h1>
);
const Blog = () => <GenericPage title="Blog Page" />;
const Perguntas = () => <GenericPage title="Perguntas Page" />;
const Noticias = () => <GenericPage title="Noticias Page" />;
const Contato = () => <GenericPage title="Contato Page" />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      tab: 0,
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
      <Router>
        <div className="flex flex-col h-screen justify-between overflow-y-scroll">
          <NavBar width={windowWidth} />
          <main className="w-full max-w-screen-xl mx-auto flex-grow">
            <Switch>
              <Route path="/" exact component={Store} />
              <Route path="/blog" component={Blog} />
              <Route path="/perguntas" component={Perguntas} />
              <Route path="/noticias" component={Noticias} />
              <Route path="/contato" component={Contato} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
