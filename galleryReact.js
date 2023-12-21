import Footer from "./Footer.js";
import descriptionConfig from "./description-config.json" assert { type: "json" };
import NavBar from "./NavBar.js";
("use strict");

const e = React.createElement;

function GalleryReact() {
  const [selection, setSelection] = React.useState("");
  const folders = [
    "albums/arts/collaboration/",
    "albums/arts/scraps/digital/",
    "albums/arts/scraps/kid/",
    "albums/arts/scraps/traditional/",
    "albums/arts/showcase/analogue/",
    "albums/arts/showcase/digital/",
    "albums/photography/animalia/arthropoda/arachnida/",
    "albums/photography/animalia/arthropoda/insecta/",
    "albums/photography/animalia/arthropoda/miscellarthropoda/",
    "albums/photography/animalia/aves/",
    "albums/photography/animalia/mammalia/",
    "albums/photography/animalia/miscellanimalia/",
    "albums/photography/animalia/reptilia/",
    "albums/photography/inanimalia/architecture/",
    "albums/photography/inanimalia/objecta/",
    "albums/photography/inanimalia/vista/",
    "albums/sculpt/",
  ];

  const [images, setImages] = React.useState({});

  //initial image load
  React.useEffect(() => {
    var promiseArr = [];

    folders.forEach((folder) => {
      var imageName = "";
      var description = "";
      images[folder] = new Array();
      var promise = new Promise(function (resolve, reject) {
        $.ajax({
          url: folder,
          success: function (data) {
            $(data)
              .find("a")
              .attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                  //get descrption
                  imageName = val.split("/");
                  imageName = imageName.pop().split(".");
                  imageName = imageName[0];
                  if (descriptionConfig[imageName]) {
                    description = descriptionConfig[imageName];
                  } else {
                    description = "";
                  }
                  //create image element
                  images[folder].push(
                    React.createElement(
                      "div",
                      { id: "galleryImageDiv" },
                      React.createElement("img", {
                        id: "galleryImage",
                        src: val,
                        description: description,
                      })
                    )
                  );
                }
              });
            resolve();
          },
          error: function (error) {
            console.log(error);
          },
        });
      });
      promiseArr.push(promise);
    });
    //sets selection after all AJAX calls are finished
    Promise.all(promiseArr).then(() => {
      setSelection("all");
    });
  }, []);

  //sets images based on selection
  function getCorrectImages(selection) {
    let returnArray = [];
    switch (selection) {
      case "":
        return;
      case "all":
        returnArray = images["albums/arts/collaboration/"].concat(
          images["albums/arts/scraps/digital/"],
          images["albums/arts/scraps/kid/"],
          images["albums/arts/scraps/traditional/"],
          images["albums/arts/showcase/analogue/"],
          images["albums/arts/showcase/digital/"],
          images["albums/photography/animalia/arthropoda/arachnida/"],
          images["albums/photography/animalia/arthropoda/insecta/"],
          images["albums/photography/animalia/arthropoda/miscellarthropoda/"],
          images["albums/photography/animalia/aves/"],
          images["albums/photography/animalia/mammalia/"],
          images["albums/photography/animalia/miscellanimalia/"],
          images["albums/photography/animalia/reptilia/"],
          images["albums/photography/inanimalia/architecture/"],
          images["albums/photography/inanimalia/objecta/"],
          images["albums/photography/inanimalia/vista/"],
          images["albums/sculpt/"]
        );
        return returnArray;
      case "art":
        returnArray = images["albums/arts/collaboration/"].concat(
          images["albums/arts/scraps/digital/"],
          images["albums/arts/scraps/kid/"],
          images["albums/arts/scraps/traditional/"],
          images["albums/arts/showcase/analogue/"],
          images["albums/arts/showcase/digital/"]
        );
        return returnArray;
      case "collaboration":
        return images["albums/arts/collaboration/"];
      case "scraps":
        returnArray = images["albums/arts/scraps/digital/"].concat(
          images["albums/arts/scraps/kid/"],
          images["albums/arts/scraps/traditional/"]
        );
        return returnArray;
      case "digitalScraps":
        return images["albums/arts/scraps/digital/"];
      case "kid":
        return images["albums/arts/scraps/kid/"];
      case "traditional":
        return images["albums/arts/scraps/traditional/"];
      case "showcase":
        returnArray = images["albums/arts/showcase/analogue/"].concat(
          images["albums/arts/showcase/digital/"]
        );
        return returnArray;
      case "analogue":
        return images["albums/arts/showcase/analogue/"];
      case "digitalShowcase":
        return images["albums/arts/showcase/digital/"];
      case "photography":
        returnArray = images[
          "albums/photography/animalia/arthropoda/arachnida/"
        ].concat(
          images["albums/photography/animalia/arthropoda/insecta/"],
          images["albums/photography/animalia/arthropoda/miscellarthropoda/"],
          images["albums/photography/animalia/aves/"],
          images["albums/photography/animalia/mammalia/"],
          images["albums/photography/animalia/miscellanimalia/"],
          images["albums/photography/animalia/reptilia/"],
          images["albums/photography/inanimalia/architecture/"],
          images["albums/photography/inanimalia/objecta/"],
          images["albums/photography/inanimalia/vista/"]
        );
        return returnArray;
      case "animalia":
        returnArray = images[
          "albums/photography/animalia/arthropoda/arachnida/"
        ].concat(
          images["albums/photography/animalia/arthropoda/insecta/"],
          images["albums/photography/animalia/arthropoda/miscellarthropoda/"],
          images["albums/photography/animalia/aves/"],
          images["albums/photography/animalia/mammalia/"],
          images["albums/photography/animalia/miscellanimalia/"],
          images["albums/photography/animalia/reptilia/"]
        );
        return returnArray;
      case "arthropoda":
        returnArray = images[
          "albums/photography/animalia/arthropoda/arachnida/"
        ].concat(
          images["albums/photography/animalia/arthropoda/insecta/"],
          images["albums/photography/animalia/arthropoda/miscellarthropoda/"]
        );
        return returnArray;
      case "arachnida":
        return images["albums/photography/animalia/arthropoda/arachnida/"];
      case "insecta":
        return images["albums/photography/animalia/arthropoda/insecta/"];
      case "miscellarthropoda":
        return images[
          "albums/photography/animalia/arthropoda/miscellarthropoda/"
        ];
      case "aves":
        return images["albums/photography/animalia/aves/"];
      case "mammalia":
        return images["albums/photography/animalia/mammalia/"];
      case "miscellanimalia":
        return images["albums/photography/animalia/miscellanimalia/"];
      case "reptilia":
        return images["albums/photography/animalia/reptilia/"];
      case "inanimalia":
        returnArray = images[
          "albums/photography/inanimalia/architecture/"
        ].concat(
          images["albums/photography/inanimalia/objecta/"],
          images["albums/photography/inanimalia/vista/"]
        );
        return returnArray;
      case "architecture":
        return images["albums/photography/inanimalia/architecture/"];
      case "objecta":
        return images["albums/photography/inanimalia/objecta/"];
      case "vista":
        return images["albums/photography/inanimalia/vista/"];
      case "sculpt":
        return images["albums/sculpt/"];
    }
  }

  //Make mouse scroll left and right
  const item = document.getElementById("galleryContainer");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 200;
    else item.scrollLeft -= 200;
  });

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
        })
      ),
      React.createElement(NavBar, { setSelection })
    ),
    React.createElement(
      "div",
      { id: "galleryContainer" },
      getCorrectImages(selection)
    ),
    React.createElement(Footer)
  );
}
const domContainer = document.querySelector("#galleryReact");
const root = ReactDOM.createRoot(domContainer);
root.render(e(GalleryReact));
