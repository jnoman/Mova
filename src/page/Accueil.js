import React from "react";
import { Link } from 'react-router-dom';
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import DivMarche from "./../component/DivMarche1";

export default function Accueil() {
    return (
        <div className="div-Accueil">
            <div className="div-Accueil-header">
                <h1>VÉHICULES,<br />MUSCLES,<br />À LA DEMANDE</h1>
            </div>
            <div className="div-Accueil-liner">
                <p>Ne lévez plus le doigt. Réservez à la demande un véhicule et/ou un<br /> assistant pour tous vos tâches lourdes. n’importe quand, n’importe où.</p>
            </div>
            <div className="div-Accueil-green">
                <div className="div-Accueil-green-1">
                    <div className="card-group">
                        <div className="card">
                            <img src="./../images/vector1.PNG" className="card-top-img" alt="..." />
                            <div className="card-body">
                                <p className="card-title">Grands objets</p>
                                <p className="card-text">Transporter vos objets<br />volumineux.</p>
                                <Link to="/grandsObjets"><img className="card-icon" src="./../images/flech.PNG" /></Link>
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
                        <div className="card">
                            <img src="./../images/vector3.PNG" className="card-top-img" alt="..." />
                            <div className="card-body">
                                <p className="card-title">Assistance à la demande</p>
                                <p className="card-text">Réservez un assistant pour vous<br />aider avec vos tâches lourdes</p>
                                <Link to="/assistanceDemande"><img className="card-icon" src="./../images/flech.PNG" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-Accueil-green-2">
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
            </div>


            <div className="div-Accueil-map">
                <h3>Un véhicule aussi gros que nécessaire</h3>
                <p>Réservez rapidement et facilement un véhicule utilitaire pour tous vos besoins de transport.</p>
            </div>
            <div className="div-Accueil-transport">
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/transport-s.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">S</p>
                            <p className="card-text">Utile pour le transport de quelques objets volumineux.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/transport-m.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">M</p>
                            <p className="card-text">Parfait pour transporter plusieiurs objets. </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/transport-l.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">L</p>
                            <p className="card-text">Utile pour transporter de la marchandises ou bien déménagement.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Accueil-assistant">
                <h3>Rencontrez votre nouvel assistant  MOVA</h3>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src="./../images/phone.PNG" alt="..."></img>
                        </div>
                        <div className="col-md-7">
                                <h5 className="card-title">Ne lévez plus le doigt, obtenez désormais l’assistance physique dont vous avez besoin <img src="./../images/hand.PNG" alt="..."></img></h5>
                                <p className="card-text">Vous avez des objets lourds et avez besoin d'aide ? Réservez un assistant à la demande en 2 min. L’équipe entièrement vérifiée du MOVA est prête à déplacer des meubles et même des montagnes.</p>
                                <img src="./../images/assistant.PNG" alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Accueil-fardeau">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>Relaxez et laisser MOVA s’occupe de votre fardeau</h4>
                                <h5>Que ce soit la mise en place d’un évenement ou déplacement de quelques objets à domicile, nos assistants peuvent tous faire pour vous rendre la vie moins difficile.</h5>
                                <a className="nav-link btn btn-primary" href="#">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <div className="card-body">
                                <img src="./../images/Evenementiel.PNG" alt="..."></img>
                                <p>Evénementiel</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <div className="card-body">
                                <img src="./../images/Deplacer.PNG" alt="..."></img>
                                <p>Déplacer de gros objets à domicile</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <div className="card-body">
                                <img src="./../images/Livraison.PNG" alt="..."></img>
                                <p>Livraison / déménagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Accueil-aimer">
                <h4>Raisons pour aimer MOVA<img src="./../images/vector12.PNG" className="card-top-img" alt="..." /></h4>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector13.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Simple et à la demande</p>
                            <p className="card-text">Réservez un véhicule et/ou assistant en moins de 2 min</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector14.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Abordable</p>
                            <p className="card-text">Renseignez-vous d'avance sur le prix de votre MOVA avant de réserver, sans surprise!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector15.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Suivi en temps réel</p>
                            <p className="card-text">Restez informé de la date à laquelle votre objet sera ramassé et livré, et contactez votre chauffeur</p>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector16.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Flexible</p>
                            <p className="card-text">Planifiez votre MOVA à l'avance ou réservez immédiatemment et nous arriverons dans moins de 30 minutes</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector17.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Protégé</p>
                            <p className="card-text">Chaque MOVA est couverte par une police d'assurance à partir du moment où vos articles sont entre nos mains.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector18.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Évaluer</p>
                            <p className="card-text">Lorsque votre MOVA est terminé, vous pouvez évaluer le service avec la possibilité de leur donner un pourboire pour un travail bien fait.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DivMarche></DivMarche>
            <div className="div-Accueil-prochaine">
                <h4>La prochaine fois, quand vous pensez une tâche lourde...</h4>
                <img src="./../images/prochaine.PNG" className="card-top-img" alt="..." />
                <h4>PENSEZ MOVA</h4>
            </div>
            <div className="div-Accueil-Rejoindre">
                <h4>Rejoindre MOVA</h4>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/Rejoindre1.PNG" className="card-top-img" alt="..." />
                        <p>Devenez partenaire <i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="card">
                        <img src="./../images/Rejoindre2.PNG" className="card-top-img" alt="..." />
                        <p className="second">Devenez MOVA PRO <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
            <Map></Map>
            <DivFooter></DivFooter>
        </div>
    );
}