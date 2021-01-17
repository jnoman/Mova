import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche";
import { Link } from 'react-router-dom';

export default function AssistanceDemande(){
    return(
        <div  className="div-services">
            <style type="text/css">@import url("./../css/menu2.css" ); </style>
            <div className="div-services-header">
                <img src="./../images/AssistanceDemande.PNG" alt="..." />
                <h3>MUSCLES À LA DEMANDE<br />POUR VOS TACHES<br />EPUISANTES</h3>
            </div>
            <div className="div-services-icons">
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector22.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Vérifiés</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector23.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Qualifiés</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector24.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Professionnels</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-services-content">
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/AssistanceDemande1.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Besoin d'une livraison d'un grand canapé ?</h4>
                            <p>Vous venez d’acheter un nouveau canapé, et vous vous rendez compte que vous n’avez pas assez d’espace dans la voiture ? Ne vous en faites pas, réserver une MOVA en 2min et faites vous livrer en moins d’une heure.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Besoin d'une livraison d'un grand canapé ?</h4>
                            <p>Vous venez d’acheter un nouveau canapé, et vous vous rendez compte que vous n’avez pas assez d’espace dans la voiture ? Ne vous en faites pas, réserver une MOVA en 2min et faites vous livrer en moins d’une heure.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/AssistanceDemande2.PNG" className="card-top-img" alt="..." />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/AssistanceDemande3.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Besoin d'une livraison d'un grand canapé ?</h4>
                            <p>Vous venez d’acheter un nouveau canapé, et vous vous rendez compte que vous n’avez pas assez d’espace dans la voiture ? Ne vous en faites pas, réserver une MOVA en 2min et faites vous livrer en moins d’une heure.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-services-image">
                <img src="./../images/AssistanceDemande4.PNG" className="card-top-img" alt="..." />
            </div>
            <div className="div-services-autre">
                <h4>Autres façons d’utiliser MOVA</h4>
                <div className="card-group card-group-first">
                        <div className="card">
                            <img src="./../images/vector2.PNG" className="card-top-img" alt="..." />
                            <div className="card-body">
                                <p className="card-title">Livraison à domicile</p>
                                <p className="card-text">Faites vous livrer tout ce que vous<br />voulez en  moins de 30 min.</p>
                                <Link to="/livraisonDomicile"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                            </div>
                        </div>
                    <div className="card">
                        <img src="./../images/vector1.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Grands objets</p>
                            <p className="card-text">Transporter vos objets<br />volumineux.</p>
                            <Link to="/grandsObjets"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector6.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Débarasser d’un objet</p>
                            <p className="card-text">Débarasser des objets<br />indésirables.</p>
                            <Link to="/débarasserObjet"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector5.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Livraison Marketplace</p>
                            <p className="card-text">Acheter et vendre sans se<br />préoccuper de la livraison.</p>
                            <Link to="/livraisonMarketplace"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector4.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Faire un don</p>
                            <p className="card-text">Faire un don des affaires dont<br />vous n’avez plus besoin.</p>
                            <Link to="/faireDon"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Map></Map>
            <DivFooter></DivFooter>
        </div>
    );
}