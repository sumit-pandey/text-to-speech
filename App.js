import React, { useState, useEffect } from "react";
import "./App.css";
import sound from "./sound/intro.wav";
import { vttJson } from "./vttjson/vttjson.js";
function App() {
  const [isPlaying, updateBtn] = useState(true);

  const click = e => {
    const audio = document.querySelector("audio");
    const method = audio.paused ? "play" : "pause";
    audio[method]();
    updateBtn(!isPlaying);
  };
  useEffect(() => {
    vttJson.then(value => {
      (function(win, doc) {
        var audioPlayer = doc.getElementById("audiofile");
        var subtitles = doc.getElementById("subtitles");
        var syncData = value;
        createSubtitle();

        function createSubtitle() {
          var element;
          for (let i = 0; i < syncData.length; i++) {
            element = doc.createElement("span");
            element.setAttribute("id", i);
            element.setAttribute(
              "data-skip",
              syncData[i].start.toFixed(4) / 1000
            );
            element.innerHTML = syncData[i].part + "<br>";
            element.addEventListener("click", skip);
            subtitles.appendChild(element);
          }
        }

        audioPlayer.addEventListener("timeupdate", function onTimeUpdate() {
          syncData.forEach((element, index) => {
            console.log(element.start)
          });
        });
      })(window, document);
      console.log(value);
    });

    const audio = document.querySelector("audio");
    const progressbar = document.querySelector(".progressbar");
    audio.addEventListener("timeupdate", function progress() {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressbar.style.width = `${percent}%`;
    });
  }, []);
  const skip = e => {
    const audio = document.querySelector("audio");
    audio.currentTime = e.target.dataset.skip;
    audio.paused && audio.play() && updateBtn(!isPlaying);
  };
  const skipTen = e => {
    const audio = document.querySelector("audio");
    audio.currentTime += parseFloat(e.target.dataset.skip);
    audio.paused && audio.play() && updateBtn(!isPlaying);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <i className="fa fa-arrow-left "></i>
        </div>
        <h3>Podcast</h3>
        <h3>
          <i className="fa fa-ellipsis-v"></i>
        </h3>
      </header>
      {/* <section className="content">
        <h1 className="heading">INRODUCTION</h1>
        <p onClick={skip} data-skip="0s">
          History goes fast. It's already been a century 100 years of magneti.
          Marelli. This year is a special one for us, and we wanted to mark it
          with a unique and just a special edition of our historical Heritage
          leaving the traditional route in chronological order aside and riding
          the wave of an almost theatrical form of Storytelling. We set out to
          narrator history through 12 themed fragments which paying homage to
          our tradition.
        </p>
        <p onClick={skip} data-skip="25s">
          We wouldn't call anything but Sparks or an Italian shinty lie. 12
          panels to be collected to retrace some of the most important moments
          of a bright industrial intrapreneurial and technological Adventure the
          Troubadour who will accompany us on this journey came from the pennant
          Noel Queen Tavola director of our historic corporate magazine Spratt
          Suburgatory.
        </p>
        <p onClick={skip} data-skip="47s">
          He is the little man with the megaphone the noisy character whose job
          it was to open the demand or a parabola or let me speak section the
          area dedicated to the readers questions. Now that the introductions
          are over we can begin enjoy your trip into the world of magneti
          marelli. Let us now give the word to the Sparks themselves.
        </p>
      </section> */}
      <p id="subtitles"></p>

      <div className="player">
        <span>Podcast is {isPlaying ? "paused " : "playing"}...</span>
        <audio src={sound} id="audiofile"></audio>
        <div className="progressbar"></div>
        <div className="ctl-btns">
          <i
            className="fa fa-angle-double-left"
            id="play-n-pause"
            data-skip="-10s"
            onClick={skipTen}
          ></i>
          {isPlaying ? (
            <i className="fa fa-play" onClick={click}></i>
          ) : (
            <i className="fa fa-pause" onClick={click}></i>
          )}
          <i
            className="fa fa-angle-double-right"
            data-skip="10s"
            onClick={skipTen}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default App;
