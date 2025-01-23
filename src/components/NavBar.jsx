import { ShoppingCart } from 'lucide-react';
import style from "../styles/NavBar.module.css"

export default function NavBar(){
    return(
        <div className={style.navBar}>
            <h1 className={style.title}>vixed</h1>
            <div className={style.buttons}>
                <p className={style.link}>Home</p>
                <p className={style.link}>Shop</p>
                <ShoppingCart color="black" size={28} />
            </div>
        </div>
    )
}