import React from 'react';
import Header from './Header';
import ProjetosFundamentos from './ProjetosFundamentos';
import '../css/Projects.css';
import ProjetosFrontEnd from './ProjetosFrontEnd';
import { useHistory } from 'react-router-dom';



function Projects() {
    const history = useHistory();
    return ( 
        <section className="home-page">
            <Header />
            <ProjetosFundamentos/>
            <ProjetosFrontEnd history={history}/>
        </section>
     );
}

export default Projects;