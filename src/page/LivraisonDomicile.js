import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche";
import { Link } from 'react-router-dom';

export default function LivraisonDomicile() {
    return (
        <div className="div-services">
            <div className="div-services-header">
                <img src="./../images/LivraisonDomicile.PNG" alt="..." />
                <h3>VOUS ACHETEZ<br /> ON VOUS <br />LIVRE</h3>
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
                        <img src="./../images/LivraisonDomicile1.PNG" className="card-top-img" alt="..." />
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
                            <h4>Le magasin ne propose pas une livraison à domicile ?</h4>
                            <p>Vous achetez des appareils électroménagers , et vous découvrez que le magasin ne livre pas ? ne vous en faites pas, MOVA s’en chargera.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/LivraisonDomicile2.PNG" className="card-top-img" alt="..." />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/LivraisonDomicile3.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Vous souhaitez changer le look de votre salon ?</h4>
                            <p>Vous désirez refaire le salon de vos rêves mais vous vous souciez de la livraison et de l’effort pour tout mettre en order ? pas de souci, MOVA se préoccupera de tout et vous laisse créer le salon qui rendra vos voisins jaloux.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-services-image">
                <img src="./../images/LivraisonDomicile4.PNG" className="card-top-img" alt="..." />
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
                        <img src="./../images/vector6.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Débarasser d’un objet</p>
                            <p className="card-text">Débarasser des objets<br />indésirables.</p>
                            <Link to="/débarasserObjet"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Map></Map>
            <DivFooter></DivFooter>
        </div>
    );
}