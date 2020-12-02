import React from "react";
import "../stylesheets/application.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import noImage from "../images/no_image.svg";

const Card = (props) => {
  const { book } = props;
  const formattedPrice = parseFloat(book.price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function buyBook(id) {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    fetch("/line_items.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
      body: JSON.stringify({ product_id: id }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="w-full sm:self-stretch sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center py-8 px-4">
      <img
        src={
          book.has_photo
            ? require("../images/" + book.photo_path.slice(6))
            : noImage
        }
        alt={book.title}
        className="h-64"
      />
      <a
        href="#"
        className="text-base text-center py-4 sm:flex-grow hover:text-gray-500 hover:bg-transparent"
      >
        {book.title}
      </a>
      <p className="text-xl">R${formattedPrice}</p>
      <button
        onClick={() => buyBook(book.id)}
        className="w-full btn cursor-pointer"
      >
        <FontAwesomeIcon icon={faShoppingBasket} className="text-2xl pr-3" />
        <span className="text-sm">Comprar</span>
      </button>
    </div>
  );
};

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch("/products.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ books: result });
      });
  }

  render() {
    const { books } = this.state;
    return (
      <section className="flex flex-col sm:flex-row sm:flex-wrap">
        {books.map((book) => (
          <Card book={book} key={book.id} />
        ))}
      </section>
    );
  }
}

export default Store;
