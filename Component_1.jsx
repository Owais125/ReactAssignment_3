import { Logo } from "./Logo"
import { Navbar_Main2 } from "./Navbar_Main2"
import { Navbar_main } from "./Navbar_main"

const Copmonent_1 = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex justify-content-evnly  ">
                    <div>
                        <a className="navbar-brand" href="#"><Logo /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <a className="nav-link " href="#" >Items</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>

    )

}

export { Copmonent_1 }

