//import Footer from "./Footer.js";
import descriptionConfig from "./description-config.json" assert { type: "json" };
import NavBar from "./NavBar.js";
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
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "div",
        { id: "hotherym3" },
        React.createElement(
          "a",
          { href: "main.html" },
          React.createElement("img", {
            src: "images/hotherym-small.png",
            height: "59",
            width: "273",
          }),
          React.createElement(NavBar, null)
        ),
        "hi"
      )
    );
    // <>
    //   {console.log(test)}
    //   <div id="hotherym3">
    //     <a href="main.html">
    //       <img src="images/hotherym-small.png" height="59" width="273" />
    //     </a>
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
