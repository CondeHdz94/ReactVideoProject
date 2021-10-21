import React, { useEffect } from "react";
import "../assets/styles/components/Player.scss";
import { connect } from "react-redux";
import { playingVideo } from "../actions";
import { Redirect } from "react-router";
import PageError from "./PageError";

function Player(props) {
  const { id } = props.match.params;
  useEffect(() => {
    props.playingVideo(id);
  }, [])

  const hasPlaying = Object.keys(props.playing).length > 0;
  
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button
          type="button"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Regresar
        </button>
      </div>
    </div>
  ):
  <PageError/>;
}

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  playingVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
