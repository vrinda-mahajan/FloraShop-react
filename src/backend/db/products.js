import { v4 as uuid } from "uuid";
import croton from "../../assets/images/croton.jpg";
import zzplant from "../../assets/images/zzplant.jpg";
import spider from "../../assets/images/spiderPlant.jpg";
import zebra from "../../assets/images/zebra.jpg";
import cocopeat from "../../assets/images/cocopeat.jpg";
import vermicompost from "../../assets/images/vermicompost.jpg";
import planter from "../../assets/images/planter1.jpg";
import clayPot from "../../assets/images/planter2.jpg";
import wateringCan from "../../assets/images/tool3.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: croton,
    title: "Croton Plant",
    inStock: true,
    rating: 3.5,
    price: 499,
    productDesc:
      "Add a touch of vibrant beauty to your indoor space with our stunning Croton Plant. Known for its colorful and variegated foliage, this tropical beauty will captivate your guests with its rich hues of red, orange, and yellow. With its easy-care nature, the Croton Plant thrives in a variety of light conditions, making it the perfect choice for any room in your home.",
    categoryName: "Plants",
  },
  {
    _id: uuid(),
    img: zzplant,
    title: "ZZ Plant",
    inStock: false,
    rating: 4.5,
    price: 600,
    productDesc:
      "ZZ Plant, the epitome of elegance and resilience. This hardy houseplant features glossy, dark green leaves that gracefully arch upwards, creating a visually striking display. Perfect for both seasoned plant enthusiasts and beginners, the ZZ Plant requires minimal care and can thrive in low-light conditions, making it an ideal choice for any corner of your home or office. Enhance your space with this plant and enjoy its air-purifying qualities.",
    categoryName: "Plants",
  },
  {
    _id: uuid(),
    img: spider,
    title: "Spider Plant",
    inStock: true,
    rating: 5.0,
    price: 299,
    productDesc:
      "Welcome the Spider Plant into your indoor garden and embrace its unique charm. With its long, arching leaves adorned with white stripes, this plant adds a touch of freshness and visual interest to any space. Known for its air-purifying qualities, the Spider Plant is a low-maintenance choice that thrives in various lighting conditions. Whether hanging or potted, this versatile plant is sure to bring life and vitality to your home or office.",
    categoryName: "Plants",
  },
  {
    _id: uuid(),
    img: zebra,
    title: "Zebra Plant",
    inStock: true,
    rating: 4.7,
    price: 700,
    productDesc:
      "Featuring striking dark green leaves with bold white veins, this unique succulent will be a standout addition to your plant collection. With its ability to thrive in bright indirect light, the Zebra Plant is a great choice for both indoor and outdoor settings. Its compact size and water-storing leaves make it an excellent low-maintenance option.",
    categoryName: "Plants",
  },
  {
    _id: uuid(),
    img: cocopeat,
    title: "Cocopeat",
    inStock: true,
    rating: 3.8,
    price: 399,
    productDesc:
      "Nurture your plants with our premium-quality Cocopeat, the perfect organic growing medium. Sustainably sourced from coconut husks, Cocopeat offers excellent water retention and aeration properties, ensuring optimal root development and healthy plant growth. This lightweight and eco-friendly substrate is suitable for a wide range of plants, from indoor favorites to outdoor blooms.",
    categoryName: "Fertilizers",
  },
  {
    _id: uuid(),
    img: vermicompost,
    title: "Vermicompost",
    inStock: true,
    rating: 4.2,
    price: 499,
    productDesc:
      "Revitalize your soil and enrich your plants' nutrition with our nutrient-dense Vermicompost. Crafted through the natural process of worm composting, this organic fertilizer is teeming with beneficial microorganisms and essential nutrients. Perfect for indoor and outdoor plants, Vermicompost improves soil structure, enhances water retention, and promotes vigorous growth. ",
    categoryName: "Fertilizers",
  },
  {
    _id: uuid(),
    img: planter,
    title: "Planter",
    inStock: true,
    rating: 5.0,
    price: 699,
    productDesc:
      "Elevate your plant display with our elegant Ceramic Planter. Crafted with attention to detail, this stylish planter adds a touch of sophistication to any setting. Its durable ceramic construction ensures long-lasting beauty, while the drainage hole and saucer prevent overwatering and promote healthy root growth. ",
    categoryName: "Planters",
  },
  {
    _id: uuid(),
    img: clayPot,
    title: "Clay Pot",
    inStock: true,
    rating: 2.7,
    price: 250,
    productDesc:
      "Experience the timeless appeal of our Clay Pot, a classic choice for plant lovers. Handcrafted from natural clay, this rustic planter exudes charm and character. With its porous nature, the Clay Pot allows for proper airflow and moisture regulation, creating an ideal environment for plant roots. Embrace the traditional beauty and natural benefits of clay soil.",
    categoryName: "Planters",
  },
  {
    _id: uuid(),
    img: wateringCan,
    title: "Watering Can",
    inStock: true,
    rating: 3.8,
    price: 550,
    productDesc:
      "Designed with both functionality and aesthetics in mind, this essential gardening tool allows you to provide your plants with the right amount of water, ensuring their health and vitality. Crafted from durable materials, our Watering Can features a comfortable handle and a precision spout for easy pouring. ",
    categoryName: "Tools",
  },
];
