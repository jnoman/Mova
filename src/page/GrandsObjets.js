import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche";
import { Link } from 'react-router-dom';

export default function GrandsObjets(){
    return(
        <div className="div-services">
            <div className="div-services-header">
                <img src="./../images/GrandsObjets.PNG" alt="..." />
                <h3>TRANSPORTEZ<br />TOUT EN UN CLIC</h3>
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
                        <img src="./../images/GrandsObjets1.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Besoin de transporter une piéce de meuble ?</h4>
                            <p>Besoin de transporter une piéce de meuble à votre tante mais la piéce est large et vous ne pouvez pas faire confiance à n’importe qui pour la transporter dans les meilleures conditions ? Avec MOVA vous povez réserver des assistants et du véhicule pour vour garantir le comfort total.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Déménagement en un seul clic </h4>
                            <p>Félicitations ! Vous venez d’être admis dans l’école de vos rêves ou bien commencer un nouveau boulot quelque part loin de chez vous. Maintenant, vous vous souciez de qui va vous assister à tout emballer et transporter avec un minimun d’effort et du temps. Réserver votre MOVA en moins de de 2min, et laissez le reste à nous.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/GrandsObjets2.PNG" className="card-top-img" alt="..." />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-sm-6 col-md-7">
                        <img src="./../images/GrandsObjets3.PNG" className="card-top-img" alt="..." />
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="div-text">
                            <h4>Déménager dans un nouveau bureau</h4>
                            <p>Pour un petit bureau, MOVA peut réduire vos frais de déménagement et vous déplacer à la demande selon les horaires de votre choix. Vous pouvez même demander à MOVA de vous fournir des meubles supplémentaires à la demande directement depuis le magasin de meubles.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-services-image">
                <img src="./../images/GrandsObjets4.PNG" className="card-top-img" alt="..." />
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