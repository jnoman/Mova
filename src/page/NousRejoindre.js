import React from "react";
import { Carousel } from "react-bootstrap";
import DivFooter from "./../component/DivFooter";

export default function NousRejoindre() {
    return (
        <div className="div-NousRejoindre">
            <Carousel indicators={false} controls={false} pause={false}>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="./../images/NousRejoindre.PNG"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <style type="text/css">@import url("./../css/menu1.css" ); </style>
                        <h3>Redéfinissons<br />ensemble le futur<br />du transport</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="./../images/NousRejoindre1.PNG"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <style type="text/css">@import url("./../css/menu2.css" ); </style>
                        <h3>Rejoigner nous<br />pour révolutionner<br />l’exécution des<br />tâches lourdes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="div-NousRejoindre-PRO">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <h4>Pourquoi rejoindre MOVA  PRO</h4>
                            <div className="card-group">
                                <div className="card">
                                    <img src="./../images/vector27.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Plus d’argent</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/vector28.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Horaires flexibles</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <img src="./../images/vector29.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Rendez les gens heureux</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/vector30.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Trajets optimisés</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-NousRejoindre-Livreur">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <h4>Comment devenir Livreur MOVA</h4>
                                <p><span>1</span>Au moins 18 ans</p>
                                <p><span>2</span>Un véhicule en bonne condition </p>
                                <p><span>3</span>Avoir un smartphone</p>
                                <p><span>4</span>Fort et physiquement capable</p>
                                <p><span>5</span>Respect et professionnalisme</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivFooter></DivFooter>
        </div>
    );
}