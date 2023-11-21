import { useState } from "react";
import './Team.scss'
import TeamItem from "./TeamItem";

function Team(){
    const [team,setTeam] = useState([
        {
            name:"Куруляк Едуард",
            post:"Ст. Програміст",
            img:"./img/team/eduard.jpg"
        },
        {
            name:"Оробець Олег",
            post:"Мл. Програміст",
            img:"./img/team/aleh.gif"
        },
        {
            name:"Нагрудний Роман",
            post:"Інженер БД",
            img:"./img/team/roma.jpg"
        },
        {
            name:"Коля (founder)",
            post:"",
            img:"./img/team/kolya.jpg"
        },
        {
            name:"Лепчук Денис",
            post:"Маркетолог",
            img:"./img/team/denis.jpg"
        },
        {
            name:"Недорубан Анастасія",
            post:"Дизайнер",
            img:"./img/team/nastya.jpg"
        }
    ])
    return(
        <div className="our-team">
            <div className="container">
                <h2>Наша Команда</h2>
                <div className="team-catalog">
                    {
                        team.map((el,i)=>(
                            <TeamItem item={el} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Team;