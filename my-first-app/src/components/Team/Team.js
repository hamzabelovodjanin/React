import "./Team.css"

export default function Team({name , points, onDeleteTeam}) {

return (

<div className="team-card">
    <p>{name}</p>
    <p>{points}points</p>
    <button>X</button>
    <button onClick={onDeleteTeam}></button>
</div>

)

}