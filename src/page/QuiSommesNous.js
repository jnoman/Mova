import React from "react";
import DivFooter from "./../component/DivFooter";

export default function QuiSommesNous() {
    return (
        <div className="div-QuiSommesNous">
            <div className="div-QuiSommesNous-header">
                <div className="div-QuiSommesNous-header-green"></div>
            </div>
            <div className="div-QuiSommesNous-text">
                <h1>Notre Histoire</h1>
                <p>Notre histoire a commencé quand on s’est rendu compte que le secteur du transport est resté inchangé depuis des décennies, caractérisé par le retard technologique, manque de confiance et de transparence....Personne n’a vraiment introduit le changement nécessaire pour y développer, et donc on a prit l’innitiative de devenir les pionnners qui vont redéfinir les régles de ce secteur mais surtout de simplifier d’un part le quotidien des personnes, et d’autre part d’introduire une solution qui permettra d’améliorer la vie de nos héros sur la route, autrement appelés chauffeurs.</p>
            </div>
            <div className="div-QuiSommesNous-text">
                <h1>Notre Mission</h1>
                <p>MOVA est fondée avec la mission  de créer la liberté du temps et la tranquilité d'esprit. Nous ferons cela en ré-imaginant la façon dont les tâches lourdes devraient être effectuées. Avec une approche centrée sur le client nous aspirons à offrir la commodité, sécurité et expérience remarquable.</p>
            </div>
            <div className="div-QuiSommesNous-text div-QuiSommesNous-icons">
                <h1>Nos Valeurs</h1>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector7.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Fiable</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector8.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">innovant</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector9.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Ambitieux</p>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/vector10.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">centré sur le client</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector11.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Proche de vous</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/vector12.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Ésprit amusant</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-QuiSommesNous-fondateurs">
                <h3>FONDATEURS</h3>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-body-color"></div>
                            <p className="card-title">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-body-color"></div>
                            <p className="card-title">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <DivFooter></DivFooter>
        </div>
    );
}