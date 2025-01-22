import s from "../styles/Hero.module.css"
export default function Hero(){
    return(
        <div className={s.heroSection}>
            <div className={s.heroElements}>
                <h2>Embrace Nature, Wear Elegance.</h2>
                <h3>Discover timeless clothing and jewelry inspired by the beauty of the natural world. Unleash your style with pieces that connect sophistication and nature.</h3>
                <button>Shop the Collection</button>
            </div>
        </div>
    )

}