import React from "react";

export default function DivMarche(){
    return(
        <div className="div-marche1">
            <h4>Comment ça marche</h4>
            <div className="div-marche">
                <div className="card-group">
                    <div className="card">
                        <img src="./../images/phone1.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">1</p>
                            <p className="card-text">Entrer adresses</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/phone2.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">2</p>
                            <p className="card-text">Sélectionner véhicule et/ou assistants</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/phone3.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">3</p>
                            <p className="card-text">Fixer date et heure</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./../images/phone4.PNG" className="card-top-img" alt="..." />
                        <div className="card-body">
                            <p className="card-title">4</p>
                            <p className="card-text">Évaluer le service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}