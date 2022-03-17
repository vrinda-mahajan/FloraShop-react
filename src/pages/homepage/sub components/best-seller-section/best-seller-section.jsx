import "./best-seller-section.css"
import {BestSellerCard} from "../../../../components/index.js"
import { bestSeller } from "../../../../data/best-seller-data"

export function BestSellerSection () {
    return (
        <section className="best-seller-section">
          <div className="best-seller-text">
              <h3 className="p1">Top best seller Products</h3>
              <p>Find what others are having on their garden</p>
          </div>
           <div className="flex-r best-seller-cards">
            {bestSeller.map(({_id,img,name,availability,price})=>{
                return <BestSellerCard key={_id} img={img} name={name} availability={availability} price={price} />
            })}
          </div> 
        </section>
    )
}