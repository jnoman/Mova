import React from "react";

export default function NousSupporter(){
    return(
        <div className="div-NousSupporter">
            <style type="text/css">@import url("./../css/menu2.css" ); </style>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="NousSupporter-text">
                            <div className="card-body">
                                <p className="card-text">Nous tenons à vous informer chérs visiteurs que ce projet est financé par des moyens purement personnelles, comme vous connaissez, les coûts de développement et de maintenance sont excessifs, mais cela ne nous êmpechera pas de suivre notre mission de vous créer le confort ultime , ainsi que notre vision de révolutionner le transport des grands objets. Et avec votre soutien nous sommes convaincus qu’on va y atteindre.</p>
                                <p className="card-text">Vous pouvez nous encourager par un don , chaque contribution compte. Si vous ne pouvez pas nous supporter financiérement, vous pouvez le faire d’autres façons.</p>
                                <p className="card-text">Les noms des contributeurs vont être référencés sur notre site web à perpétuité, comme remerciement de leur générosité.</p>
                            </div>
                            <div className="div-hl"><p>H & L</p></div>
                            <div className="NousSupporter-form">
                                <input type="text" className="NousSupporter-nom" placeholder="Entrer votre nom"/>
                                <input type="submit" value="Faire un don" className="btn-primary"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="NousSupporter-image">
                            <img src="./../images/SUPPORTER.PNG"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}