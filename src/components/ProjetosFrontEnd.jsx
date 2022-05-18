import React from 'react';
import { GiRingedPlanet, GiCardJoker, GiWallet } from 'react-icons/gi';
import { BsSpotify, BsCartCheckFill, BsPatchQuestion} from 'react-icons/bs';
import { SiTestinglibrary } from 'react-icons/si';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';

const projetosFront = [{
    nome: "Solar System",
    img: <GiRingedPlanet className="img"/>,
    redirect: '/'
},
{
    nome: "Tryunfo",
    img: <GiCardJoker className="img"/>,
    redirect: '/'
},
{
    nome: "TrybeTunes",
    img: <BsSpotify className="img"/>,
    redirect: '/'
},
{
    nome: "FrontEnd Online Store",
    img: <BsCartCheckFill className="img"/>,
    redirect: 'https://github.com/BarbaralsRocha/FrontEnd-Online-Storage'
}, 
{
    nome: "React Testing Library",
    img: <SiTestinglibrary className="img"/>,
    redirect: '/'
},
{
    nome: "TrybeWallet",
    img: <GiWallet className="img"/>,
    redirect: '/'
},
{
    nome: "Trivia",
    img: <BsPatchQuestion className="img"/>,
    redirect: '/'
},
{
    nome: "Star Wars Planets",
    img: <FaPlaceOfWorship className="img"/>,
    redirect:','
},
{
    nome: "Recipe App",
    img: <MdFastfood className="img"/>,
    redirect:'/'
}
]

function ProjetosFrontEnd(history) {

    return (
        <div className="container-projetos">
            <h3>FrontEnd</h3>
            <div className="container-cards">
            {
                projetosFront.map(({nome, img, redirect}, index)=>(
                    <a
                    className="cards" 
                    target="_blank" 
                    href={redirect}
                    key={index} rel="noreferrer">
                        {img}
                        <p>{nome}</p>
                    </a>
                ))
            }
            </div>
        </div>
    );
}

export default ProjetosFrontEnd;