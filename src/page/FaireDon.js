import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche";
import { Link } from 'react-router-dom';

export default function FaireDon(){
    return(
        <div className="div-services">
            <div className="div-services-header">
                <img src="./../images/FaireDon.PNG" alt="..." />
                <h3>DONNER UNE<br />DEUXIÉME VIE A VOS<br />ANCIENNESAFFAIRES</h3>
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
                        <img src="./../images/vector21.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Association de votre choix</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-services-content">
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/FaireDon1.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Des meubes usagés ? </h4>
                            <p>Le meuble de votre maison ne vous satisfait plus ? Au lieu de les jeter vous pouvez les donner à ceux qui ont en besoin le plus, Choisissez la charité de vote choix et MOVA fait le reste.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Il est temps de vider ce placard</h4>
                            <p>Vous avez des vieux vêtements que vous n’allez probablement jamais porter et ne savez pas quoi faire avec ? Réserver une MOVA et redonner de la vie à ces vêtements en les donnant à une charité de votre choix, et mettez un sourire sur le visage de ceux qui en ont besoin.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/FaireDon2.PNG" className="card-top-img" alt="..." />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/FaireDon3.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Et oui, vous pouvez même donner vos jouets</h4>
                            <p>Des jouets qui datent de plusieurs années que vous voulez toujours vous en débarasser mais ne savez pas comment ? vous pouvez les donner également à l’une de nos charités partenaires et entrez le bonheur à ces espaces.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-services-image">
                <img src="./../images/FaireDon4.PNG" className="card-top-img" alt="..." />
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