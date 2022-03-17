import { v4 as uuid } from "uuid";
import spiderPlant from "../assets/images/spiderPlant.jpg"
import fiddle from "../assets/images/fiddle-leaf.jpg"
import zzplant from "../assets/images/zzplant.jpg"
import zebra from "../assets/images/zebra.jpg"

export const bestSeller = [
  {
    _id: uuid(),
    img:fiddle,
    name:'Fiddle Leaf Fig',
    availability:'Stock available',
    price:550,
  },
  {
    _id: uuid(),
    img:zzplant,
    name:'ZZ Plant',
    availability:'Stock available',
    price:600,
  },
  {
    _id: uuid(),
    img:spiderPlant,
    name:'Spider Plant',
    availability:'Stock available',
    price:299,
  },
  {
    _id: uuid(),
    img:zebra,
    name:'Zebra Plant',
    availability:'Stock available',
    price:700,
  },
];
