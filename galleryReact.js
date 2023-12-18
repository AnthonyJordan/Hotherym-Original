//import Footer from "./Footer.js";
import descriptionConfig from "./description-config.json" assert { type: "json" };
import NavBar from "./NavBar.js";
("use strict");

const e = React.createElement;

function GalleryReact() {
  const folders = [
    "albums/arts/collaboration/", // 0
    "albums/arts/scraps/digital/", // 1
    "albums/arts/scraps/kid/", // 2
    "albums/arts/scraps/traditional/", // 3
    "albums/arts/showcase/analogue/", // 4
    "albums/arts/showcase/digital/", // 5
    "albums/photography/animalia/arthropoda/arachnida/", // 6
    "albums/photography/animalia/arthropoda/insecta/", // 7
    "albums/photography/animalia/arthropoda/miscellarthropoda/", // 8
    "albums/photography/animalia/aves/", // 9
    "albums/photography/animalia/mammalia/", //10
    "albums/photography/animalia/miscellanimalia/", //11
    "albums/photography/animalia/reptilia/", // 12
    "albums/photography/inanimalia/architecture/", // 13
    "albums/photography/inanimalia/objecta/", // 14
    "albums/photography/inanimalia/vista/", // 15
    "albums/sculpt/", // 16
  ];

  const images = {};

  folders.forEach((folder) => {
    var imageName = "";
    images[folder] = new Array();

    $.ajax({
      url: folder,
      success: function (data) {
        $(data)
          .find("a")
          .attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
              (imageName = val.split("/")),
                (imageName = imageName.pop().split("."));
              (imageName = imageName[0]),
                images[folder].push(
                  "<div id=galleryImageDiv><img src='" +
                    val +
                    "'  id=galleryImage></div>"
                );
            }
          });
      },
      error: function (error) {
        console.log(error);
      },
    });
  });

  //Make mouse scroll left and right
  //item = document.getElementById("galleryContainer");

  // window.addEventListener("wheel", function (e) {
  //   if (e.deltaY > 0) item.scrollLeft += 200;
  //   else item.scrollLeft -= 200;
  // });

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
const domContainer = document.querySelector("#galleryReact");
const root = ReactDOM.createRoot(domContainer);
root.render(e(GalleryReact));
