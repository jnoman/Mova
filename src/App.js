import './App.css';
import './css/style1.css'
import Menu from "./component/Menu";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from "./page/Accueil";
import Entreprise from "./page/Entreprise";
import NousRejoindre from "./page/NousRejoindre";
import QuiSommesNous from "./page/QuiSommesNous";
import NousSupporter from "./page/NousSupporter";
import GrandsObjets from "./page/GrandsObjets";
import AssistanceDemande from "./page/AssistanceDemande";
import FaireDon from "./page/FaireDon";
import LivraisonMarketplace from "./page/LivraisonMarketplace";
import DébarasserObjet from "./page/DébarasserObjet";
import LivraisonDomicile from "./page/LivraisonDomicile";

function App() {
  return (
    <Router>
      <div className="containe">
        <Route path="/" component={Accueil} exact/>
        <Route path="/entreprise" component={Entreprise}/>
        <Route path="/nousRejoindre" component={NousRejoindre}/>
        <Route path="/quiSommesNous" component={QuiSommesNous}/>
        <Route path="/nousSupporter" component={NousSupporter}/>

        <Route path="/grandsObjets" component={GrandsObjets}/>
        <Route path="/assistanceDemande" component={AssistanceDemande}/>
        <Route path="/faireDon" component={FaireDon}/>
        <Route path="/livraisonMarketplace" component={LivraisonMarketplace}/>
        <Route path="/débarasserObjet" component={DébarasserObjet}/>
        <Route path="/ivraisonDomicile" component={LivraisonDomicile}/>
        <Menu></Menu>
      </div>
    </Router>
  );
}

export default App;
