import PropTypes from "prop-types"
import s from "../styles/ShopCard.module.css"
export default function ShopCard({imageUrl = "", prodName = "productName", price = 0}){
    return (
        <div className={s.shopCard}>
            <img src={imageUrl} alt={prodName} />
            <div className={s.line}>
                <div className={s.namediv}>
                    <p className={s.name}>{prodName}</p>
                </div>
                <p>{"$" + price}</p>
            </div>
        </div>
    )
}

ShopCard.propTypes={
    imageUrl: PropTypes.string,
    prodName: PropTypes.string,
    price: PropTypes.number
}