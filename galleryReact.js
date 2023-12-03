// import React, { useState, useEffect } from "react";
// import Footer from "./Footer";
// import descriptionConfig from "./description-config.json" assert { type: "json" };
("use strict");

const e = React.createElement;

class GalleryReact extends React.Component {
  constructor(props) {
    super(props);
  }
  // folders = [
  //   "albums/arts/collaboration/",
  //   "albums/arts/scraps/digital/",
  //   "albums/arts/scraps/kid/",
  //   "albums/arts/scraps/traditional/",
  //   "albums/arts/showcase/analogue/",
  //   "albums/arts/showcase/digital/",
  //   "albums/photography/animalia/arthropoda/arachnida/",
  //   "albums/photography/animalia/arthropoda/insecta/",
  //   "albums/photography/animalia/arthropoda/miscellarthropoda/",
  //   "albums/photography/animalia/aves/",
  //   "albums/photography/animalia/mammalia/",
  //   "albums/photography/animalia/miscellanimalia/",
  //   "albums/photography/animalia/reptilia/",
  //   "albums/photography/inanimalia/architecture/",
  //   "albums/photography/inanimalia/objecta/",
  //   "albums/photography/inanimalia/vista/",
  //   "albums/sculpt/",
  // ];

  //   folders.forEach((folder) => {
  //     var imageName = "";

  //     $.ajax({
  //       url: folder,
  //       success: function (data) {
  //         $(data)
  //           .find("a")
  //           .attr("href", function (i, val) {
  //             if (val.match(/\.(jpe?g|png|gif)$/)) {
  //               (imageName = val.split("/")),
  //                 (imageName = imageName.pop().split("."));
  //               (imageName = imageName[0]),
  //                 $(document.getElementById("galleryContainer")).append(
  //                   "<div id=galleryImageDiv><img src='" +
  //                     val +
  //                     "'  id=galleryImage></div>"
  //                 );
  //             }
  //           });
  //       },
  //       error: function (error) {
  //         console.log(error);
  //       },
  //     });
  //   });

  // componentDidMount() {
  //   fetch("albums/arts/collaboration/").then((r) => {
  //     if (r.ok) {
  //       console.log(r);
  //     }
  //   });
  // }

  //Make mouse scroll left and right
  //item = document.getElementById("galleryContainer");

  // window.addEventListener("wheel", function (e) {
  //   if (e.deltaY > 0) item.scrollLeft += 200;
  //   else item.scrollLeft -= 200;
  // });

  render() {
    return React.createElement("div", null, "hi");
    // <>
    //   {console.log(test)}
    //   <div id="hotherym3">
    //     <a href="main.html">
    //       <img src="images/hotherym-small.png" height="59" width="273" />
    //     </a>
    //   </div>
    //   <div id="navbar" class="dropdown">
    //     <p class="dropbtn">The Navigator</p>{" "}
    //     <div class="dropdown-content">
    //       <div class="home-container">
    //         <a
    //           href="art.html"
    //           id="Art"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link"
    //         >
    //           Art
    //         </a>
    //         <a
    //           href="scraps.html"
    //           id="Scraps"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link01"
    //         >
    //           Scraps
    //         </a>
    //         <a
    //           href="showcase.html"
    //           id="Showcase"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link02"
    //         >
    //           Showcase
    //         </a>
    //         <a
    //           href="kid.html"
    //           id="Kid"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link03"
    //         >
    //           Kid
    //         </a>
    //         <a
    //           href="traditional.html"
    //           id="Traditional"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link04"
    //         >
    //           Traditional
    //         </a>
    //         <a
    //           href="digital.html"
    //           id="Digital"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link05"
    //         >
    //           Digital
    //         </a>
    //         <a
    //           href="collaboration.html"
    //           id="Collaboration"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link06"
    //         >
    //           Collaboration
    //         </a>
    //         <a
    //           href="photography.html"
    //           id="Photography"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link07"
    //         >
    //           Photography
    //         </a>
    //         <a
    //           href="animalia.html"
    //           id="Animalia"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link08"
    //         >
    //           Animalia
    //         </a>
    //         <a
    //           href="anthropoda.html"
    //           id="Anthropoda"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link09"
    //         >
    //           Anthropoda
    //         </a>
    //         <a
    //           href="reptilia.html"
    //           id="Reptilia"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link10"
    //         >
    //           Reptilia
    //         </a>
    //         <a
    //           href="aves.html"
    //           id="Aves"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link11"
    //         >
    //           Aves
    //         </a>
    //         <a
    //           href="mammalia.html"
    //           id="Mammalia"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link12"
    //         >
    //           Mammalia
    //         </a>
    //         <a
    //           href="miscellarthropoda.html"
    //           id="Miscellantropoda"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link13"
    //         >
    //           Miscellarthropoda
    //         </a>
    //         <a
    //           href="arachnida.html"
    //           id="Arachnida"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link14"
    //         >
    //           Arachnida
    //         </a>
    //         <a
    //           href="insecta.html"
    //           id="Insecta"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link15"
    //         >
    //           Insecta
    //         </a>
    //         <a
    //           href="miscellanimalia.html"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link16"
    //         >
    //           Miscellanimalia
    //         </a>
    //         <a
    //           href="inanimalia.html"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link17"
    //         >
    //           Inanimalia
    //         </a>
    //         <a
    //           href="architecture.html"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link18"
    //         >
    //           Architecture
    //         </a>
    //         <a
    //           href="vista.html"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link19"
    //         >
    //           Vista
    //         </a>
    //         <a
    //           href="objecta.html"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link20"
    //         >
    //           Objecta
    //         </a>
    //         <a
    //           href="sculptures.html"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link21"
    //         >
    //           Sculptures
    //         </a>
    //         <a
    //           href="digital.html"
    //           id="Digital"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link22"
    //         >
    //           Digital
    //         </a>
    //         <a
    //           href="analogue.html"
    //           id="Analogue"
    //           target="_parent"
    //           rel="noreferrer"
    //           class="home-link23"
    //         >
    //           Analogue
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="galleryContainer">
    //     <a></a>
    //   </div>

    //   <Footer />
    // </>
  }
}
const domContainer = document.querySelector("#galleryReact");
const root = ReactDOM.createRoot(domContainer);
root.render(e(GalleryReact));
