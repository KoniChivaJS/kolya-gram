import { Link } from "react-router-dom";
import './Menu.scss';
import MenuItem from "./Menu-item";

function Menu({catalog}){

    return(
        <div className="menu">
            <div className="container">
                <h2>Наші опції</h2>
                <div className="catalog">
                    {
                        catalog.map((el,i) => (
                            <MenuItem item={el} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;