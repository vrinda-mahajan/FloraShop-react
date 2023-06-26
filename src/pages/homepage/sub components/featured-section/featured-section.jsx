import "./featured-section.css"
import {FeatureCard} from "../../../../components/index.js"
import { useCategoryContext } from "../../../../contexts/category-context.jsx";

export function FeatureSection () {
  const {categories} = useCategoryContext();
  
    return (
        <section id="categories">
          <h3 className="featured-text">Our Featured</h3>
          <div className="center flex-wrap featured-products">
            {categories.map(({_id,categoryName,img})=>{
                return <FeatureCard key={_id} img={img} category={categoryName} />
            })}
          </div>
        </section>
    )
}