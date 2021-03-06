import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import deleteIcon from "../assets/static/remove-icon.png";
import { connect } from "react-redux";
import { setFavorite, deteleFavorite } from "../actions";
import { Link } from "react-router-dom";

const CarouselItem = ({
  id,
  cover,
  title,
  year,
  contentRating,
  duration,
  setFavorite,
  deteleFavorite,
  isList,
}) => {
  const handleSetFavorite = () => {
    setFavorite({ id, cover, title, year, contentRating, duration });
  };
  const handleDeleteFavorite = () => {
    deteleFavorite({ id });
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Delete Icon"
              onClick={() => handleDeleteFavorite()}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={() => handleSetFavorite()}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setFavorite,
  deteleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
