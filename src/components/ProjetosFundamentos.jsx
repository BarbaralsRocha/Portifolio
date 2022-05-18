import React from 'react';
import { BsEmojiSunglassesFill } from 'react-icons/bs';
import { IoIosColorPalette, IoIosColorFill } from 'react-icons/io';
import { GiLoveLetter } from 'react-icons/gi';
import { ImMagicWand } from 'react-icons/im';
import { SiJest, SiTodoist } from 'react-icons/si';
import { FaEarlybirds } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const projetosFundamentos = [{
    nome: "ToDo List",
    img: <SiTodoist className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/ToDo-List'
},
{
    nome: "Meme Generator",
    img: <BsEmojiSunglassesFill className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/Meme-Generator'
},
{
    nome: "Art in Pixels",
    img: <IoIosColorPalette className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/Pixels-Art'
},
{
    nome: "Find The Color",
    img: <IoIosColorFill className="img"/>, //
    redirect:'https://github.com/BarbaralsRocha/Color-Guess'
},
{
    nome: "Mistery Letter",
    img: <GiLoveLetter className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/Mistery-Letter'
}, 
{
    nome: "Trybewartts",
    img: <ImMagicWand className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/TrybeWarts'
},
{
    nome: "Unitary Tests",
    img: <SiJest className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/Unity-Tests-Jest'
},
{
    nome: "Zoo Functions",
    img: <FaEarlybirds className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/Zoo-Functions'
},
{
    nome: "Shopping Cart",
    img: <RiShoppingCartFill className="img"/>,
    redirect:'https://github.com/BarbaralsRocha/Shopping-Cart'
},
]

function ProjetosFundamentos() {
    return (
        <div className="container-projetos">
                    <h3>Fundamentos (Iniciante)</h3>
                    <div className="container-cards">
                        {
                            projetosFundamentos.map(({nome, img, redirect}, index)=>(
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

export default ProjetosFundamentos;