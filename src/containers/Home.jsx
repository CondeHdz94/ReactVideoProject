import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const Home = ({ mylist, trends, originals, dataSearch, search }) => {
  const dataFilter = dataSearch.length > 0 ? dataSearch : "";

  const [filterTrends, setFilterTrends] = React.useState(trends);
  const [filterOriginals, setFilterOriginals] = React.useState(trends);
  const [filterMyList, setFilterMyList] = React.useState(trends);
  console.log(`trends`, trends)
  console.log(`filterTrends`, filterTrends)

  React.useMemo(() => {
    resultTrends;
    const resultTrends =
      trends &&
      trends.filter((video) => {
        return video.title.toLowerCase().includes(dataFilter.toLowerCase());
      });

    const resultOriginals =
      originals &&
      originals.filter((video) => {
        return video.title.toLowerCase().includes(dataFilter.toLowerCase());
      });
    console.log(`dataFilter`, dataFilter )
    console.log(`resultTrends`, resultTrends )
    console.log(`resultTrends.length`, resultTrends.length )
    console.log(`=========` )
     setFilterTrends(resultTrends)

    setFilterOriginals(resultOriginals)

  }, [trends, originals, dataFilter]);

  return (
    <>
      <Search />
      {search.length > 0 && (
        <Categories title="Encontrados">
          <Carousel>
            {search.map((item) => (
              <CarouselItem key={`myList` + item.id} {...item} isList={true} />
            ))}
          </Carousel>
        </Categories>
      )}
      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={`myList` + item.id} {...item} isList={true} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {filterTrends.map((item) => (
            <CarouselItem key={`trends` + item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {filterOriginals.map((item) => (
            <CarouselItem key={`originals` + item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataSearch: state.dataSearch,
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
