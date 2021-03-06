import React from "react";
import "../stylesheets/application.css";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Blog", link: "/blog" },
  { title: "Perguntas", link: "/perguntas" },
  { title: "Notícias", link: "/noticias" },
  { title: "Contato", link: "/contato" },
];

const MenuButton = (props) => {
  const { onClick } = props;
  return (
    <button className="md:hidden" onClick={onClick}>
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-xl hover:text-gray-300"
      />
    </button>
  );
};

const Menu = (props) => {
  const { menuItems } = props;
  return (
    <nav className="w-full md:w-auto md:block">
      <ul>
        {menuItems.map((item, id) => (
          <Link key={id} to={item.link}>
            <li className="pt-4 md:inline md:px-4 text-white hover:text-gray-300">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const Logo = () => (
  <Link to="/">
    <svg
      className="h-6 fill-current text-white hover:text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.237 12.7"
    >
      <path d="M11.112 1.588v10.318H1.587a.794.794 0 110-1.587h8.732V0H1.587C.711 0 0 .71 0 1.587v9.525C0 11.99.71 12.7 1.587 12.7h10.32V1.587zM21.256 6.506l-.012 2.54q0 .559.165.838.178.267.724.267h3.213q.584.013.584.889 0 .673-.165.978-.165.305-.673.317-1.791.051-3.544.051-1.752 0-4.47-.025-.457 0-.75-.216-.279-.229-.317-.622-.101-1.105-.101-3.48 0-2.388.05-3.213.064-.838.242-1.105.178-.28.698-.28h3.404q.533 0 .698.28.178.28.216.902.038.622.038 1.88zm6.407-.596h2.476q.432 0 .572.19.152.19.19.85.05.648.05 2.388 0 1.727-.075 2.439-.038.216-.216.38-.178.166-.635.191-.445.038-1.067.038-.622 0-1.13-.038-.508-.025-.686-.19-.178-.165-.203-.381-.09-.826-.09-2.528 0-1.714.052-2.336.05-.623.19-.813.14-.19.572-.19zm1.371-2.998q.838 0 1.257.343.432.33.432.914 0 1.372-1.829 1.372-.736 0-1.257-.318-.52-.317-.52-.952 0-1.359 1.917-1.359zm2.938 3.429q0-.457.521-.457l2.794-.013q.42 0 .635.127.216.114.381.483l1.181 2.21q.051.152.203.152.153 0 .229-.152l1.22-2.528q.1-.228.279-.266.05-.013.177-.013l1.334-.013q.178 0 .241.165.038.076.038.178 0 .089-.063.203-1.727 3.556-2.832 5.512-.216.33-.686.508-.47.178-1.029.178-1.244 0-1.664-.635-.406-.648-.863-1.473-.457-.826-1.042-1.943-.584-1.118-.914-1.715-.14-.292-.14-.508zm11.069-.47h2.477q.432 0 .597.19.165.178.165.547v.457q.711-1.346 2.311-1.346.534 0 .877.343.343.343.343.914 0 .572-.305 1.143-.305.559-.851.559-.254 0-.711-.254-.458-.267-.737-.267-.28 0-.584.203-.292.204-.292.673 0 2.045-.076 2.706-.039.215-.216.38-.178.166-.635.204-.445.025-.89.025-.444 0-1.51-.05-.305-.013-.483-.178-.178-.166-.203-.381-.09-.826-.09-2.528t.051-2.324q.051-.635.19-.825.14-.19.572-.19zm11.992-.203q4.14 0 4.179 2.692.025 1.143.025 2.096 0 .952-.013 1.283-.012.33-.177.482-.153.14-.61.14h-2.692q-.407 0-.56-.14-.152-.152-.164-.444 0-.013-.013-.038v-.064q-.838.864-2.286.864-1.003 0-1.715-.496-.698-.508-.698-1.384 0-.889.495-1.41.508-.533 1.194-.724.699-.19 1.486-.19.8 0 1.562.152v-.05q0-.635-.254-.915-.241-.28-.8-.28-.546 0-.914.102-.369.09-.56.19-.52.306-.723.306-.203 0-.368-.19-.153-.191-.153-.585 0-.406.14-.559.152-.152.47-.305 1.105-.533 3.15-.533zm-.597 5.194q.56 0 .572-.216.025-.419.025-1.105 0-.266-.406-.266t-.66.203q-.254.19-.254.571 0 .381.203.597.216.216.52.216z" />
    </svg>
  </Link>
);

const CartIcon = () => (
  <FontAwesomeIcon
    icon={faShoppingCart}
    className="text-white text-xl hover:text-gray-300 hover:bg-transparent md:order-last"
  />
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  render() {
    const { menuOpen } = this.state;
    const { width } = this.props;
    const tailwindMdBreakpoint = parseInt(
      resolveConfig(tailwindConfig).theme.screens.md.slice(0, -2)
    );
    return (
      <header className="w-full bg-green-500 text-white">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between flex-wrap">
          <MenuButton
            onClick={() => {
              this.setState({ menuOpen: !menuOpen });
            }}
          />
          <Logo />
          <CartIcon />
          {(width >= tailwindMdBreakpoint || menuOpen) && (
            <Menu menuItems={menuItems} />
          )}
        </div>
      </header>
    );
  }
}

export default NavBar;
