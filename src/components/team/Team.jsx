import { useState } from "react";
import "./Team.scss";
import TeamItem from "./TeamItem";

function Team() {
  const [team, setTeam] = useState([
    {
      name: "Куруляк Едуард",
      post: "Front-End dev. & co-founder",
      img: "./img/team/eduard.jpg",
    },
    {
      name: "Оробець Олег",
      post: "Back-End dev.",
      img: "./img/team/aleh.gif",
    },
    {
      name: "Микола Подарунок",
      post: "Інженер БД & co-founder",
      img: "./img/team/kolya.jpg",
    },
  ]);
  return (
    <div className="our-team">
      <div className="container">
        <h2>Наша Команда</h2>
        <div className="team-catalog">
          {team.map((el, i) => (
            <TeamItem item={el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Team;
