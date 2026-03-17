import priceData from "./prices.json";
import inventoryData from "./inventory.json";
import offerData from "./offers.json";

export interface ProductVariant {
  id: string;
  unit: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  key: string
  name: string
  category: string
  unit: string
  image: string
  description: string
  price: number
  originalPrice?: number
  variants?: ProductVariant[]
  inStock: boolean
  stock?: number
  tag?: string
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface ProductVariant {
  id: string
  unit: string
  price: number
}

export const categories: Category[] = [
  { id: "vegetables", name: "Vegetables", icon: "🥬", color: "bg-green-100" },
  { id: "fruits", name: "Fruits", icon: "🍎", color: "bg-red-100" },
  { id: "dairy", name: "Dairy", icon: "🥛", color: "bg-blue-100" },
  { id: "staples", name: "Staples", icon: "🌾", color: "bg-yellow-100" },
  { id: "snacks", name: "Snacks", icon: "🍿", color: "bg-orange-100" },
  { id: "beverages", name: "Beverages", icon: "🧃", color: "bg-purple-100" },
];

type PriceInfo = {
  variants?: ProductVariant[]
  price?: number
  originalPrice?: number
}

const getProductData = (key: keyof typeof priceData) => {
  const priceInfo = priceData[key] as PriceInfo

  return {
    price: priceInfo.price ?? priceInfo.variants?.[0]?.price ?? 0,
    originalPrice: priceInfo.originalPrice,
    variants: priceInfo.variants ?? [],
    inStock: inventoryData[key]?.inStock ?? true,
    stock: inventoryData[key]?.stock ?? 0,
    tag: offerData[key]?.tag
  }
}

export const products: Product[] = [

/* Vegetables */

{
  id: "fresh_tomatoes",
  key: "fresh_tomatoes",
  name: "Fresh Tomatoes",
  category: "vegetables",
  unit: "500g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/250px-Tomato_je_c1cuys.jpg",
  description: "Farm-fresh red tomatoes, perfect for curries and salads.",
  featured: true,
  ...getProductData("fresh_tomatoes")
},

{
  id: "green_spinach",
  key: "green_spinach",
  name: "Green Spinach",
  category: "vegetables",
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/136-500x500_f17b4p.jpg",
  description: "Fresh organic spinach leaves, rich in iron.",
  ...getProductData("green_spinach")
},

{
  id: "onions",
  key: "onions",
  name: "Onions",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/df54c034-a747-4f00-81ce-47191ab4972c.9efd669f6daffd19ffaf32e270ef7598_l0qyns.jpg",
  description: "Premium quality onions for everyday cooking.",
  ...getProductData("onions")
},

{
  id: "potatoes",
  key: "potatoes",
  name: "Potatoes",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465257/potatoes-scaled_apgoq1.jpg",
  description: "Fresh potatoes, ideal for all types of dishes.",
  ...getProductData("potatoes")
},

{
  id: "green_capsicum",
  key: "green_capsicum",
  name: "Green Capsicum",
  category: "vegetables",
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Green_bell_pepper_jnpavf.jpg",
  description: "Fresh green bell peppers.",
  ...getProductData("green_capsicum")
},

{
  id: "cauliflower",
  key: "cauliflower",
  name: "Cauliflower",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466236/Chou-fleur_02_q3jane.jpg",
  description: "Fresh farm cauliflower.",
  ...getProductData("cauliflower")
},

{
  id: "cabbage",
  key: "cabbage",
  name: "Cabbage",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465852/Freshpoint-green-cabbage_o6lnvg.jpg",
  description: "Crisp and fresh cabbage.",
  ...getProductData("cabbage")
},

{
  id: "green_peas",
  key: "green_peas",
  name: "Green Peas (Matar)",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Green-Peas_cjbnl1.jpg",
  description: "Sweet and tender green peas.",
  popular: true,
  ...getProductData("green_peas")
},

{
  id: "green_chilli",
  key: "green_chilli",
  name: "Green Chilli",
  category: "vegetables",
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465906/Artboard_1_copy_grande_nzpjv5.jpg",
  description: "Fresh green chillies.",
  ...getProductData("green_chilli")
},

{
  id: "garlic",
  key: "garlic",
  name: "Garlic",
  category: "vegetables",
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465918/garlic_twlb3z.jpg",
  description: "Aromatic garlic cloves.",
  ...getProductData("garlic")
},

{
  id: "ginger",
  key: "ginger",
  name: "Ginger",
  category: "vegetables",
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465931/ginger-80e324d-scaled_fzdona.jpg",
  description: "Fresh ginger roots.",
  ...getProductData("ginger")
},

{
  id: "beetroot",
  key: "beetroot",
  name: "Beetroot",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465953/beetroot_mbtqg3.jpg",
  description: "Healthy beetroot.",
  ...getProductData("beetroot")
},

{
  id: "lemon",
  key: "lemon",
  name: "Lemon",
  category: "vegetables",
  unit: "2pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465981/PXL_20250116_1607549042_rpsylo.jpg",
  description: "Juicy lemons.",
  ...getProductData("lemon")
},

{
  id: "bottle_gourd",
  key: "bottle_gourd",
  name: "Bottle Gourd (Lauki)",
  category: "vegetables",
  unit: "1pc",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466007/1524_yup6kf.jpg",
  description: "Tender bottle gourd.",
  ...getProductData("bottle_gourd")
},

{
  id: "brinjal",
  key: "brinjal",
  name: "Brinjal (Baingan)",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466049/round_eggplant_800x_ddqgtf.png",
  description: "Fresh brinjal perfect for bharta.",
  ...getProductData("brinjal")
},

{
  id: "cucumber",
  key: "cucumber",
  name: "Cucumber",
  category: "vegetables",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466071/Cucumber_yzbwtt.jpg",
  description: "Crunchy cucumbers.",
  ...getProductData("cucumber")
},

/* Fruits */

{
  id: "shimla_apple",
  key: "shimla_apple",
  name: "Shimla Apple",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490343/WhatsApp-Image-2022-01-11-at-16.53.57-1_rlxs3j.jpg",
  description: "Premium Shimla apples.",
  popular: true,
  ...getProductData("shimla_apple")
},

{
  id: "pineapple",
  key: "pineapple",
  name: "Pineapple",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490370/71_qAJehpkL_djbgag.jpg",
  description: "Fresh tropical pineapple.",
  ...getProductData("pineapple")
},

{
  id: "pomegranate",
  key: "pomegranate",
  name: "Pomegranate",
  category: "fruits",
  unit: "1kg",
  image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400&h=400&fit=crop",
  description: "Sweet pomegranates packed with antioxidants.",
  popular: true,
  ...getProductData("pomegranate")
},

{
  id: "chiniya_banana",
  key: "chiniya_banana",
  name: "Chiniya Banana",
  category: "fruits",
  unit: "13pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/banana-1_qryzdr.jpg",
  description: "Small sweet chiniya bananas.",
  popular: true,
  ...getProductData("chiniya_banana")
},

{
  id: "kiwi",
  key: "kiwi",
  name: "Kiwi",
  category: "fruits",
  unit: "3pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490473/330px-Kiwi__28Actinidia_chinensis_29_1_Luc_Viatour_qbolui.jpg",
  description: "Vitamin C rich kiwi fruits.",
  ...getProductData("kiwi")
},

{
  id: "papaya",
  key: "papaya",
  name: "Papaya",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490522/330px-Carica_papaya_dsc07806_hs8z2j.jpg",
  description: "Ripe nutritious papaya.",
  ...getProductData("papaya")
},

{
  id: "singapuri_banana",
  key: "singapuri_banana",
  name: "Singapuri Banana",
  category: "fruits",
  unit: "13pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490635/42E9as7NaTaAi4A6JcuFwG-1200-80_wq8lbp.jpg",
  description: "Fresh Singapuri bananas.",
  ...getProductData("singapuri_banana")
},

{
  id: "imported_guava",
  key: "imported_guava",
  name: "Imported Guava",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Imported-Guava_kp7rjf.jpg",
  description: "Premium imported guava.",
  ...getProductData("imported_guava")
},

{
  id: "strawberry",
  key: "strawberry",
  name: "Strawberry",
  category: "fruits",
  unit: "200g",
  image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
  description: "Fresh strawberries.",
  ...getProductData("strawberry")
},

{
  id: "grapes",
  key: "grapes",
  name: "Grapes",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490715/598fa4dc3131dff06c11acffafcc0e6a_dalfya.jpg",
  description: "Sweet juicy grapes.",
  ...getProductData("grapes")
},

{
  id: "watermelon",
  key: "watermelon",
  name: "Watermelon",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/watermeloen_2_eu3c0h.jpg",
  description: "Refreshing watermelon.",
  ...getProductData("watermelon")
},

{
  id: "fuji_apple",
  key: "fuji_apple",
  name: "Fuji Apple",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490833/FujiApples4pieces_1_spnh7x.png",
  description: "Premium Fuji apples.",
  ...getProductData("fuji_apple")
},

{
  id: "kinnaur_apple",
  key: "kinnaur_apple",
  name: "Kinnaur Apple",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490865/images_6cfaa187-464d-40c5-8510-4c47e4cc9994_201x_cses4h.jpg",
  description: "Famous Himachal Kinnaur apples.",
  ...getProductData("kinnaur_apple")
},

{
  id: "orange",
  key: "orange",
  name: "Orange",
  category: "fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490919/Tangerine-SpotlessFruitsIndia_1024x1024_n3d2oy.png",
  description: "Fresh juicy oranges.",
  ...getProductData("orange")
}

].map((product) => ({
  ...product,
  id: crypto.randomUUID()
}));