("use strict");

const e = React.createElement;

function NavBar({ setSelection }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { id: "navbar", className: "dropdown" },
      React.createElement("p", { className: "dropbtn" }, "The Navigator"),
      React.createElement(
        "div",
        { className: "dropdown-content" },
        React.createElement(
          "div",
          { className: "home-container" },
          React.createElement(
            "p",
            {
              className: "home-link",
              id: "Art",
              onClick: () => setSelection("art"),
            },
            "Art"
          ),
          React.createElement(
            "p",
            {
              className: "home-link01",
              id: "Scraps",
              onClick: () => setSelection("scraps"),
            },
            "Scraps"
          ),
          React.createElement(
            "p",
            {
              className: "home-link02",
              id: "Showcase",
              onClick: () => setSelection("showcase"),
            },
            "Showcase"
          ),
          React.createElement(
            "p",
            {
              className: "home-link03",
              id: "Kid",
              onClick: () => setSelection("kid"),
            },
            "Kid"
          ),
          React.createElement(
            "p",
            {
              className: "home-link04",
              id: "Traditional",
              onClick: () => setSelection("traditional"),
            },
            "Traditional"
          ),
          React.createElement(
            "p",
            {
              className: "home-link05",
              id: "DigitalScraps",
              onClick: () => setSelection("digitalScraps"),
            },
            "Digital"
          ),
          React.createElement(
            "p",
            {
              className: "home-link06",
              id: "Collaboration",
              onClick: () => setSelection("collaboration"),
            },
            "Collaboration"
          ),
          React.createElement(
            "p",
            {
              className: "home-link07",
              id: "Photography",
              onClick: () => setSelection("photography"),
            },
            "Photography"
          ),
          React.createElement(
            "p",
            {
              className: "home-link08",
              id: "Animalia",
              onClick: () => setSelection("animalia"),
            },
            "Animalia"
          ),
          React.createElement(
            "p",
            {
              className: "home-link09",
              id: "Arthropoda",
              onClick: () => setSelection("arthropoda"),
            },
            "Arthropoda"
          ),
          React.createElement(
            "p",
            {
              className: "home-link10",
              id: "Reptilia",
              onClick: () => setSelection("reptilia"),
            },
            "Reptilia"
          ),
          React.createElement(
            "p",
            {
              className: "home-link11",
              id: "Aves",
              onClick: () => setSelection("aves"),
            },
            "Aves"
          ),
          React.createElement(
            "p",
            {
              className: "home-link12",
              id: "Mammmalia",
              onClick: () => setSelection("mammalia"),
            },
            "Mammalia"
          ),
          React.createElement(
            "p",
            {
              className: "home-link13",
              id: "Miscellarthropoda",
              onClick: () => setSelection("miscellarthropoda"),
            },
            "Miscellarthropoda"
          ),
          React.createElement(
            "p",
            {
              className: "home-link14",
              id: "Arachnida",
              onClick: () => setSelection("arachnida"),
            },
            "Arachnida"
          ),
          React.createElement(
            "p",
            {
              className: "home-link15",
              id: "Insecta",
              onClick: () => setSelection("insecta"),
            },
            "Insecta"
          ),
          React.createElement(
            "p",
            {
              className: "home-link16",
              id: "Miscellanimalia",
              onClick: () => setSelection("miscellanimalia"),
            },
            "Miscellanimalia"
          ),
          React.createElement(
            "p",
            {
              className: "home-link17",
              id: "Inanimalia",
              onClick: () => setSelection("inanimalia"),
            },
            "Inanimalia"
          ),
          React.createElement(
            "p",
            {
              className: "home-link18",
              id: "Architecture",
              onClick: () => setSelection("architecture"),
            },
            "Architecture"
          ),
          React.createElement(
            "p",
            {
              className: "home-link19",
              id: "Vista",
              onClick: () => setSelection("vista"),
            },
            "Vista"
          ),
          React.createElement(
            "p",
            {
              className: "home-link20",
              id: "Objecta",
              onClick: () => setSelection("objecta"),
            },
            "Objecta"
          ),
          React.createElement(
            "p",
            {
              className: "home-link21",
              id: "Sculptures",
              onClick: () => setSelection("sculpt"),
            },
            "Sculptures"
          ),
          React.createElement(
            "p",
            {
              className: "home-link22",
              id: "DigitalShowcase",
              onClick: () => setSelection("digitalShowcase"),
            },
            "Digital"
          ),
          React.createElement(
            "p",
            {
              className: "home-link23",
              id: "Analogue",
              onClick: () => setSelection("analogue"),
            },
            "Analogue"
          )
        )
      )
    )
  );
}
export default NavBar;
