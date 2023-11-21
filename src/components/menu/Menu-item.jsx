import { Link } from "react-router-dom";
import './Menu.scss';
function MenuItem({item}){


    return(
        <Link to={`${item.link}`}>
            <div className="item-icon">
                <div className="overlay"></div>
                <img src={item.img} alt={item.name} width={320} height={270} />
                <div className="lower-block">
                    <h3>{item.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default MenuItem;