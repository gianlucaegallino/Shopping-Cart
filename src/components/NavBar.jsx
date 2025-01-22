import { ShoppingCart } from 'lucide-react';
import style from "../styles/NavBar.module.css"

export default function NavBar(){
    return(
        <div className={style.navBar}>
            <h1 className={style.title}>vixed</h1>
            <div className={style.buttons}>
                <p>Home</p>
                <p>Shop</p>
                <ShoppingCart color="black" size={28} />
            </div>
        </div>
    )
}