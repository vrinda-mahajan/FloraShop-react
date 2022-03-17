import { v4 as uuid } from "uuid";
import planters from "../../assets/images/planter.jpg"
import plants from "../../assets/images/snake.jpg"
import tools from "../../assets/images/tools.jpg"
import fertilizers from "../../assets/images/fertilizer.jpg"
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img:planters,
    categoryName: "Planters",
  },
  {
    _id: uuid(),
    img:plants,
    categoryName: "Plants",
  },
  {
    _id: uuid(),
    img:tools,
    categoryName: "Tools",
  },
  {
    _id: uuid(),
    img:fertilizers,
    categoryName: "Fertilizers",
  },
];
