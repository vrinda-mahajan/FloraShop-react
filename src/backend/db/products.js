import { v4 as uuid } from "uuid";
import croton from "../../assets/images/croton.jpg"
import zzplant from "../../assets/images/zzplant.jpg"
import spider from "../../assets/images/spiderPlant.jpg"
import zebra from "../../assets/images/zebra.jpg"
import cocopeat from "../../assets/images/cocopeat.jpg"
import vermicompost from "../../assets/images/vermicompost.jpg"
import planter from "../../assets/images/planter1.jpg"
import clayPot from "../../assets/images/planter2.jpg"
import wateringCan from "../../assets/images/tool3.jpg"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: croton,
    title: 'Croton Plant' ,
    inStock:true,
    rating:3.5,
    price: 499,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Plants',
},
{
    _id: uuid(),
    img: zzplant,
    title: 'ZZ Plant' ,
    inStock:false,
    rating:4.5,
    price: 600,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Plants',
},
{
    _id: uuid(),
    img: spider,
    title: 'Spider Plant' ,
    inStock:true,
    rating:5.0,
    price: 299,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Plants',
},
{
    _id: uuid(),
    img: zebra,
    title: 'Zebra Plant' ,
    inStock:true,
    rating:4.7,
    price: 700,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Plants',
},
{
    _id: uuid(),
    img: cocopeat,
    title: 'Cocopeat' ,
    inStock:true,
    rating:3.8,
    price: 399,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Fertilizers',
},
{
    _id: uuid(),
    img: vermicompost,
    title: 'Vermicompost' ,
    inStock:true,
    rating:4.2,
    price: 499,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Fertilizers',
},
{
    _id: uuid(),
    img: planter,
    title: 'Planter' ,
    inStock:true,
    rating:5.0,
    price: 699,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Planters',
},
{
    _id: uuid(),
    img: clayPot,
    title: 'Clay Pot' ,
    inStock:true,
    rating:2.7,
    price: 250,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Planters',
},
{
    _id: uuid(),
    img: wateringCan,
    title: 'Watering Can' ,
    inStock:true,
    rating:3.8,
    price: 550,
    productDesc:"Neque porro quisquam est qui  adipisci velit...",
    categoryName: 'Tools',
},
];
