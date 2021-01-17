import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche";
import { Link } from 'react-router-dom';

export default function DébarasserObjet() {
    return (
        <div className="div-services">
            <div className="div-services-header">
                <img src="./../images/DebarasserObjet.PNG" alt="..." />
                <h3>DEBARASSER DE<br />VOS OBJETS<br />INDÉSIRABLES</h3>
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
                        <img src="./../images/vector16.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Flexible</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector20.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Protégé</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-services-content">
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/DebarasserObjet1.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Des objets qui datent de la 2éme guerre mondiale ?</h4>
                            <p>Vous possédez des objets qui datent depuis trés long et ne savez pas quoi faire avec ? il est temps de s’en débarasser une fois et pour toute.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Vous avez un garage plein des objets inutilisables  ?</h4>
                            <p>Vous avez un garage que vous souhaitez toujours vider mais vous n’avez pas du temps, de véhicule ni d’effort pour le faire ? Réserver une MOVA et redonner de la vie à votre garage. </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/DebarasserObjet2.PNG" className="card-top-img" alt="..." />
                    </div>
                </div>
            </div>
            <div className="div-services-prendrons">
                <h4>Choses que nous ne prendrons pas</h4>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector25.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Produits dangereux</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector26.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Produits illégaux</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-services-image">
                <img src="./../images/DebarasserObjet3.PNG" className="card-top-img" alt="..." />
            </div>
            <div className="div-services-autre">
                <h4>Autres façons d’utiliser MOVA</h4>
                <div className="card-group card-group-first">
                    <div className="card">
                        <img src="./../images/vector1.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Grands objets</p>
                            <p className="card-text">Transporter vos objets<br />volumineux.</p>
                            <Link to="/grandsObjets"><img className="card-icon" src="./../images/flech.PNG" /></Link>
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
                        <img src="./../images/vector4.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Faire un don</p>
                            <p className="card-text">Faire un don des affaires dont<br />vous n’avez plus besoin.</p>
                            <Link to="/faireDon"><img className="card-icon" src="./../images/flech.PNG" /></Link>
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
                        <img src="./../images/vector2.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Livraison à domicile</p>
                            <p className="card-text">Faites vous livrer tout ce que vous<br />voulez en  moins de 30 min.</p>
                            <Link to="/livraisonDomicile"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Map></Map>
            <DivFooter></DivFooter>
        </div>
    );
}