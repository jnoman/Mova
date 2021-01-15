import React from "react";
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light div-menu">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/livraisonDomicile">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nousRejoindre">Nous rejoindre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entreprise">Entreprise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quiSommesNous">Qui sommes-nous</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nousSupporter">Nous supporte</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-primary" to="/">Réserver</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}