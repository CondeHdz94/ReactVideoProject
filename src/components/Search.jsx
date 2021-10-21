import React, { useState } from "react";
import "../assets/styles/components/Search.scss";
import { connect } from 'react-redux'
import { searchVideo, searchData } from "../actions";

const Search = ({searchVideo, searchData}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = (event) => {
    searchVideo({
      [event.target.name]: event.target.value,
    });
    searchData(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        name="searching"
        type="text"
        className="input search"
        placeholder="Buscar..."
        onChange={handleChangeSearch}
      />
    </section>
  );
};



const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  searchVideo,
  searchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

