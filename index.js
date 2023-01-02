// How to import react for version 18.0
/* import React from "react"
import ReactDOM from "react-dom/client" */

/*  function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
} */

/* // Composability
function MainContent() {
    return (
        <h1>
            DebugContent
        </h1>
    )
}
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)  */

/*  // Declarative VanillaJS Code
const h1 = document.createElement("h1")
h1.textContent = "h1 for debug lmao (hope this wont go to production codebase haha)"
h1.className = "header"
document.getElementById("root").append(h1)  */

/*  // JSX
const element = (<div>
        <h1 className="header">Header</h1>
        <p>DEBUG</p>
    </div>
)
console.log(element)
ReactDOM.render(
    element, 
    document.getElementById("root")
)  */

const navbar = (
    <nav>
        <h1>Navbar title</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

 ReactDOM.render(navbar, document.getElementById("root")) 

 // How to render in react 18.0
/* const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar) */