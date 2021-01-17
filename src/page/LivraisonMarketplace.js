import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche";
import { Link } from 'react-router-dom';

export default function LivraisonMarketplace(){
    return(
        <div  className="div-services">
            <div className="div-services-header">
                <img src="./../images/LivraisonMarketplace.PNG" alt="..." />
                <h3>Livraison<br />Marketplace</h3>
            </div>
            <div className="div-services-icons">
                <div className="card-group">
                <div className="card">
                        <img src="./../images/vector19.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Simple et à la demande</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector14.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Abordable</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector16.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Flexible</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector17.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Protégé</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-services-content">
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/LivraisonMarketplace1.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Vous l'avez acheté sur Facebook ou Avito? Faites-le livrer lorsque cela vous convient!</h4>
                            <p>Achetez de gros articles en ligne et réservez rapiement et facilement depuis votre téléphone portable pour une durée qui convient au vendeur et à vous!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-services-sociale">
            <div className="row g-0">
                    <div className="col-sm-6 col-md-6">
                        <img src="./../images/avito.PNG" className="card-top-img" alt="..." />
                        <p>AVITO</p>
                    </div>
                    <div className="col-6 col-md-6">
                    <img src="./../images/facebook.PNG" className="card-top-img" alt="..." />
                        <p>FACEBOOK</p>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-services-image">
                <img src="./../images/LivraisonMarketplace2.PNG" className="card-top-img" alt="..." />
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
                        <img src="./../images/vector3.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Assistance à la demande</p>
                            <p className="card-text">Réservez un assistant pour vous<br />aider avec vos tâches lourdes</p>
                            <Link to="/assistanceDemande"><img className="card-icon" src="./../images/flech.PNG" /></Link>
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
                        <img src="./../images/vector1.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Grands objets</p>
                            <p className="card-text">Transporter vos objets<br />volumineux.</p>
                            <Link to="/grandsObjets"><img className="card-icon" src="./../images/flech.PNG" /></Link>
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