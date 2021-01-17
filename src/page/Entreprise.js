import React from "react";
import DivFooter from "./../component/DivFooter";
import Map from "./../component/Map";
import { Link } from 'react-router-dom';

export default function Entreprise() {
    return (
        <div className="div-Entreprise">
            <div className="div-Entreprise-header">
                <img src="./../images/Entreprise.PNG" alt="..." />
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <h3>Transformez<br />votre entreprise<br />dés maintenant </h3>
                            <p>La plateforme digitale pour gérer vos besoins quotidiens en matière de livraison et d’assistance physique.</p>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-content">
                <div className="row g-0">
                    <div className="col-6 col-md-6">
                        <div className="div-text">
                            <h4>Le service de livraison que votre client mérite</h4>
                            <p>En matière de livraison, nous savons qu’il est important de préserver l’intégrité de votre marque. MOVA vous offre un support exceptionnel, une technologie logistique puissante et un vaste réseau de chauffeurs fiables.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <img src="./../images/Entreprise1.PNG" className="card-top-img" alt="..." />
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-card">
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector31.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Moins coûteuse</p>
                            <p className="card-text">Grâce à notre solution , vous n’aurez plus besoin d’investir dans un véhicule de transport</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector32.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Facile et rapide</p>
                            <p className="card-text">Vos clients peuvent réserver en moins de 2min pour se faire livrer d’auprés votre magasin</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector33.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Satisfaction client</p>
                            <p className="card-text">Rendez vos clients satisfaits grâce à une livraison impeccable </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector34.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Solution scalable</p>
                            <p className="card-text">Une solution qui s’adapte à vos différents besoins</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-button">
                <Link className="nav-link btn btn-primary" to="#">S’inscrire</Link>
            </div>
            <div className="div-Entreprise-content">
                <div className="row g-0">
                    <div className="col-sm-6 col-md-6">
                        <img src="./../images/Entreprise2.PNG" className="" alt="..." />
                    </div>
                    <div className="col-6 col-md-6">
                        <div className="div-text">
                            <h4>L’assitance physique à la demande</h4>
                            <p>Vous avez des tâches lourdes ? avec MOVA vous pouvez réserver de l’assistance physique à la demande pour aussi peu que 30 min. Chaque assistant est prêt à vous fournir un service à la hauteur de vos attentes.</p>
                            <div className="card-group">
                                <div className="card">
                                    <img src="./../images/hand.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Gain d’effort</p>
                                        <p className="card-text">Gagner d’effort en réservant des assistants à la demande. </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/vector33.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Flexible</p>
                                        <p className="card-text">Planifiez votre MOVA à l'avance ou réservez immédiatemment.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/vector36.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Adaptée</p>
                                        <p className="card-text">Une solution qui s’adapte à vos besoins.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="div-Entreprise-button">
                                <Link className="nav-link btn btn-primary" to="#">Réserver</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-flexible">
                <h4>Une solution flexible pour toutes vos tâches épuisantes</h4>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/Entreprise3.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Organisation d’un espace de stockage</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/Entreprise4.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Chargement / déchargement</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/Entreprise5.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Travaux d’installation</p>
                        </div>
                    </div>
                </div>
                <div className="card-group card-group-second">
                    <div className="card">
                        <img src="./../images/Entreprise6.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Salon professionnel</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/Entreprise7.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Aménagement</p>
                        </div>
                    </div>
                </div>
                <div className="div-Entreprise-button">
                    <Link className="nav-link btn btn-primary" to="#">Réserver</Link>
                </div>
            </div>
            <div className="div-Entreprise-quotidiens">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <h3>Livraison et muscles pour vos besoins quotidiens</h3>
                            <p>Nous nous engageons à fournir des solutions efficaces qui vous font gagner du temps et de l'argent, afin d’accélérer la croissance de votre entreprise.</p>
                            <div className="div-Entreprise-button">
                                <Link className="nav-link btn btn-primary" to="#">Réserver</Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-group">
                                <div className="card">
                                    <img src="./../images/Entreprise8.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Meubles</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/Entreprise9.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Électroménager</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/Entreprise10.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Matériaux de construction</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/Entreprise11.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Bricolage</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <img src="./../images/Entreprise12.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Piéces auto</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/Entreprise13.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Équipements</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/Entreprise14.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Commande en gros</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="./../images/Entreprise15.PNG" className="card-top-img" alt="..." />
                                    <div className="card-body">
                                        <p className="card-title">Vêtements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-Solution">
                <h4>Businesses across virtually every industry can use MOVA trucks and muscles for their daily needs</h4>
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <h5>Solution digitale adaptée à vos besoins professionnels</h5>
                            <p><i class="far fa-check-circle"></i> Réserver en avance ou à la demande</p>
                            <p><i class="far fa-check-circle"></i> Suivi en temps réel</p>
                            <p><i class="far fa-check-circle"></i> Preuve de livraison</p>
                            <p><i class="far fa-check-circle"></i> Évaluer la qualité de service</p>
                        </div>
                        <div className="col-md-6">
                            <img src="./../images/Entreprise16.PNG" className="card-top-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-marche">
                <h4>Comment ça marche</h4>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">1</p>
                            <p className="card-text">Entrer adresses</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">2</p>
                            <p className="card-text">Sélectionner véhicule et/ou assistants</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">3</p>
                            <p className="card-text">Fixer date et heure</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">4</p>
                            <p className="card-text">Évaluer le service</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-Entreprise-garantit">
                <h4>Ce qu’on vous garantit</h4>
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
            <Map></Map>
            <DivFooter></DivFooter>
        </div>
    );
}