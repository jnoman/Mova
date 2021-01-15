import React from "react";

export default function DivFooter(){
    return(
        <div className="div-footer">
            <div className="mt-5 pt-5 pb-1">
            <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xs-12">
                    <h4>MOVA</h4><br/>
                    <p>Services</p><br/>
                    <p>Entreprise</p><br/>
                    <p>Devennir MOVA PRO</p>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <h4>Des questions ?</h4><br/>
                    <p>FAQ</p><br/>
                    <p>Nous contacter</p><br/>
                </div>
                <div className="col-lg-3 col-xs-12 contact">
                    <p><i className="fa fa-map-marker-alt mr-3"></i> 7480 Mockingbird Hill undefined </p>
                    <p><i className="fa fa-mobile-alt mr-3"></i> (239) 555-0108 </p>
                    <p>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </p>
                </div>
            </div>
            <div className="row mt-5 ms-5">
                <div className="col-lg-7">
                    <p className="">© 2020 Lugg</p>
                </div>
                <div className="col-lg-3">
                    <p className="">Politique de confidentialité</p>
                </div>
                <div className="col-lg-2">
                    <p className="">Conditions d'utilisation</p>
                </div>
            </div>
            </div>
            </div>


        </div>
    );
}