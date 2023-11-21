import './Team.scss'

function TeamItem({item}){

    return(
        <div className="person-icon">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.post}</p>
        </div>
    )
}

export default TeamItem;