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
  key: string;
  name: string;
  category: string;
  subCategory?: string; // ✅ FIX ADDED
  unit: string;
  image: string;
  description: string;
  price: number;
  originalPrice?: number;
  variants?: ProductVariant[];
  inStock: boolean;
  stock?: number;
  tag?: string;

  // ✅ FIX ADDED (you are using these)
  featured?: boolean;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}



export const subCategories: Record<string, string[]> = {
  vegetables: ["Daily Essentials","Fresh Veggies","Gourds & Regional Veggies","Leafy Greens", "Spices & Aromatics"],
  fruits: ["Daily","Exotic","Juicy"],
  //dairy: ["Milk", "Cheese", "Curd"],
  staples: ["Daily" , "Oils","Whole Spices","MDH", "Everest","Ghee","Dried Fruits"],
  //snacks: ["Chips", "Biscuits", "Namkeen"],
  //beverages: ["Cold Drinks", "Juice", "Coffee", "Smoothies"],
};

export const categories: Category[] = [
  { id: "vegetables", name: "Vegetables", icon: "🥬", color: "bg-green-100" },
  { id: "fruits", name: "Fruits", icon: "🍎", color: "bg-red-100" },
  //{ id: "dairy", name: "Dairy", icon: "🥛", color: "bg-blue-100" },
  { id: "staples", name: "Staples", icon: "🌾", color: "bg-yellow-100" },
  //{ id: "snacks", name: "Snacks", icon: "🍿", color: "bg-orange-100" },
  //{ id: "beverages", name: "Beverages", icon: "🧃", color: "bg-purple-100" },
];

type PriceInfo = {
  variants?: ProductVariant[];
  price?: number;
  originalPrice?: number;
};

const getProductData = (key: keyof typeof priceData) => {
  const priceInfo = priceData[key] as PriceInfo;

  return {
    price: priceInfo.price ?? priceInfo.variants?.[0]?.price ?? 0,
    originalPrice: priceInfo.originalPrice,
    variants: priceInfo.variants ?? [],
    inStock: inventoryData[key]?.inStock ?? true,
    stock: inventoryData[key]?.stock ?? 0,
    tag: offerData[key]?.tag,
  };
};

export const products: Product[] = [

/* Vegetables */

{
  id: "fresh_tomatoes",
  key: "fresh_tomatoes",
  name: "Fresh Tomatoes",
  category: "vegetables",
  subCategory:"Daily Essentials",
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
  subCategory:"Leafy Greens",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/136-500x500_f17b4p.jpg",
  description: "Fresh organic spinach leaves, rich in iron.",
  ...getProductData("green_spinach")
},

{
  id: "onions",
  key: "onions",
  name: "Onions",
  category: "vegetables",
  subCategory:"Daily Essentials",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/df54c034-a747-4f00-81ce-47191ab4972c.9efd669f6daffd19ffaf32e270ef7598_l0qyns.jpg",
  description: "Premium quality onions for everyday cooking.",
  ...getProductData("onions")
},

{
  id: "potatoes",
  key: "potatoes",
  name: "Potatoes Ujla",
  category: "vegetables",
  subCategory:"Daily Essentials",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465257/potatoes-scaled_apgoq1.jpg",
  description: "Fresh potatoes, ideal for all types of dishes.",
  ...getProductData("potatoes")
},

{
  id: "potatoes_red",
  key: "potatoes_red",
  name: "Potatoes Red",
  category: "vegetables",
  subCategory:"Daily Essentials",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775360704/1_ewa9kk.png",
  description: "Fresh potatoes, ideal for all types of dishes.",
  ...getProductData("potatoes_red")
},

{
  id: "green_capsicum",
  key: "green_capsicum",
  name: "Green Capsicum",
  category: "vegetables",
  subCategory:"Fresh Veggies",
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
  subCategory:"Fresh Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466236/Chou-fleur_02_q3jane.jpg",
  description: "Fresh farm cauliflower.",
  ...getProductData("cauliflower")
},

{
  id: "green_chilli",
  key: "green_chilli",
  name: "Green Chilli",
  category: "vegetables",
  subCategory:"Spices & Aromatics",
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
  subCategory:"Spices & Aromatics",
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
  subCategory:"Spices & Aromatics",
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
  subCategory:"Daily Essentials",
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
  subCategory:"Spices & Aromatics",
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
  subCategory:"Gourds & Regional Veggies",
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
  subCategory:"Fresh Veggies",
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
  subCategory:"Fresh Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466071/Cucumber_yzbwtt.jpg",
  description: "Crunchy cucumbers.",
  ...getProductData("cucumber")
},

{
  id: "karela",
  key: "karela",
  name: "Karela",
  category: "vegetables",
  subCategory:"Gourds & Regional Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Bitter_Melon_1024x1024_37ab9838-93f6-4c88-83b4-508443174b78_iibeli.jpg",
  description: "Crunchy cucumbers.",
  ...getProductData("karela")
},

{
  id: "Lady_finger",
  key: "lady_finger",
  name: "Lady Finger",
  category: "vegetables",
  subCategory:"Fresh Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/lady-finger_lldtgf.webp",
  description: "Crunchy cucumbers.",
  ...getProductData("lady_finger")
},

{
  id: "Green_Bean",
  key: "green_bean",
  name: "Green Bean",
  category: "vegetables",
  subCategory:"Fresh Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/0000000004066_kizdiu.jpg",
  description: "Crunchy green beans.",
  ...getProductData("green_bean")
},

{
  id: "Drumstick",
  key: "drumstick",
  name: "Drumstick",
  category: "vegetables",
  subCategory:"Gourds & Regional Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Drumstick-Fresh_ur1izh.jpg",
  description: "Crunchy drumsticks.",
  ...getProductData("drumstick")
},

{
  id: "Parwal",
  key: "parwal",
  name: "Parwal",
  category: "vegetables",
  subCategory:"Gourds & Regional Veggies",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/250g-Frische-Parwal--spitzer-Kuerbis--9018445_utm44i.png",
  description: "Crunchy parwal.",
  ...getProductData("parwal")
},

{
  id: "Dhaniya",
  key: "dhaniya",
  name: "Dhaniya",
  category: "vegetables",
  subCategory:"Leafy Greens",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/CORIANDER2_nsmxqw.jpg",
  description: "Crunchy dhaniya.",
  ...getProductData("dhaniya")
},

{
  id: "Lal Saag",
  key: "lal_saag",
  name: "Lal Saag",
  category: "vegetables",
  subCategory:"Leafy Greens",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1774107214/500-red-spinach-seed-amaranthus-leaf-lal-saag-seeds-r1153-aywal-original-imagtftshhtguq9q_k6vglh.jpg",
  description: "Crunchy lal saag.",
  ...getProductData("lal_saag")
},


/* Out of stock products */

{
  id: "cabbage",
  key: "cabbage",
  name: "Cabbage",
  category: "vegetables",
  subCategory:"Fresh Veggies",
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
  subCategory:"Seasonal",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Green-Peas_cjbnl1.jpg",
  description: "Sweet and tender green peas.",
  popular: false,
  ...getProductData("green_peas")
},


/**********************************************************************************************************************************/
/* Fruits */
/**********************************************************************************************************************************/

{
  id: "shimla_apple",
  key: "shimla_apple",
  name: "Shimla Apple",
  category: "fruits",
  subCategory: "Daily",
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
  subCategory: "Daily",
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
  subCategory: "Daily",
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
  subCategory: "Daily",
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
  subCategory: "Exotic",
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
  subCategory: "Daily",
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
  subCategory: "Daily",
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
  subCategory: "Exotic",
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
  subCategory: "Exotic",
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
  subCategory: "Daily",
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
  subCategory: "Juicy",
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
  subCategory: "Exotic",
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
  subCategory: "Exotic",
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
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490919/Tangerine-SpotlessFruitsIndia_1024x1024_n3d2oy.png",
  description: "Fresh juicy oranges.",
  ...getProductData("orange")
},


/**********************************************************************************************************************************/
/* Staples */
/**********************************************************************************************************************************/

{
  id: "Aashirwaad_select_aata",
  key: "Aashirwaad_select_aata",
  name: "Aashirwaad Select Aata",
  category: "staples",
  subCategory: "Daily",
  unit: "5kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/aashirvaad-select-sharbati-atta-500x500_tjmyid.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Aashirwaad_select_aata")
},

{
  id: "Aashirwaad_multigrains",
  key: "Aashirwaad_multigrains",
  name: "Aashirwaad Multigrains",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Aashirvaad_20Multigrains_20Atta_204_20LB_gfjboz.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Aashirwaad_multigrains")
},
{
  id: "Aashirwaad_shudh_chakki",
  key: "Aashirwaad_shudh_chakki",
  name: "Aashirwaad Shudh Chakki",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/71mZPdDjUeL_soj91s.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Aashirwaad_shudh_chakki")
},
{
  id: "Fortune_Sugar",
  key: "Fortune_Sugar",
  name: "Fortune Sugar",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/78_numms0.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Fortune_Sugar")
},
{
  id: "Uttam_Sugar",
  key: "Uttam_Sugar",
  name: "Uttam Sugar",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/321eb251-581b-4a83-97a3-583283a846f7-uttamdoublerefinedsulphurfreesugar1kgproductimageso490017431p4900174310202203150153_i1ouri.webp",
  description: "Fresh juicy oranges.",
  ...getProductData("Uttam_Sugar")
},
{
  id: "Loose_sugar",
  key: "Loose_sugar",
  name: "Sugar Regular",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/White-Sugar_480x480_lbqken.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Loose_sugar")
},
// {
//   id: "Pink_salt",
//   key: "Pink_salt",
//   name: "Pink Salt",
//   category: "staples",
//   subCategory: "Daily",
//   unit: "1kg",
//   image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490919/Tangerine-SpotlessFruitsIndia_1024x1024_n3d2oy.png",
//   description: "Fresh juicy oranges.",
//   ...getProductData("Pink_salt")
// },
{
  id: "Tata_Salt",
  key: "Tata_Salt",
  name: "Tata Salt",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Tata.Salt_.1_lfqtqb.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Tata_Salt")
},
{
  id: "Moong_dal",
  key: "Moong_dal",
  name: "Moong Dal",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/IMG-8317_600x600_gkpixh.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Moong_dal")
},
{
  id: "Arhar_dal",
  key: "Arhar_dal",
  name: "Arhar Dal",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/arhar-kanpuri-small_gzgeby.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Arhar_dal")
},
{
  id: "Urad_dal",
  key: "Urad_dal",
  name: "Urad Dal",
  category: "staples",
  subCategory: "Daily",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/30-kg-urad-dal_zbiihe.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Urad_dal")
},
{
  id: "Fortune_kachi_ghani",
  key: "Fortune_kachi_ghani",
  name: "Fortune Kachi Ghani",
  category: "staples",
  subCategory: "Oils",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775359661/71wVU7pgwAL_flgluj.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Fortune_kachi_ghani")
},
{
  id: "Engine_oil",
  key: "Engine_oil",
  name: "Engine Oil",
  category: "staples",
  subCategory: "Oils",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/1-kachi-ghani-mustard-oil-pouch-1-mustard-oil-engine-original-imaguafzy4btgzqj_oopfjl.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Engine_oil")
},
{
  id: "Dhara_kachi_ghani",
  key: "Dhara_kachi_ghani",
  name: "Dhara Kachi Ghani",
  category: "staples",
  subCategory: "Oils",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775359730/30003360_7-dhara-oil-mustard-kachi-ghani_spiumq.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Dhara_kachi_ghani")
},
{
  id: "Everest_kitchen_king",
  key: "Everest_kitchen_king",
  name: "Everest Kitchen King",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/everest-kitchen-king-masala-50-g-quick-pantry-1_tp3gqg.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_kitchen_king")
},
{
  id: "Everest_black_pepper",
  key: "Everest_black_pepper",
  name: "Everest Black Pepper",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Everest_20Powder_20-_20Black_20Pepper_2050_20g-2_b1pcfy.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_black_pepper")
},
{
  id: "Everest_kasuri_methi",
  key: "Everest_kasuri_methi",
  name: "Everest Kasuri Methi",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/81a7rzd1dhL._AC_UF350_350_QL50__jqr74e.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_kasuri_methi")
},
{
  id: "Everest_tikhalal",
  key: "Everest_tikhalal",
  name: "Everest Tikhalal",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/1b3t0gGwzMEYFM_2e1k5WC_lhsQ8PNgVM_2bd3ddb2-f3eb-4fbc-80df-8757ba3da09f_k97kvk.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_tikhalal")
},
{
  id: "Everest_coriander",
  key: "Everest_coriander",
  name: "Everest Coriander",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/image_jh1faz.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_coriander")
},
{
  id: "Everest_chicken",
  key: "Everest_chicken",
  name: "Everest Chicken Masala",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Everest-Chicken-Masal_uhztyu.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_chicken")
},
{
  id: "Everest_turmeric",
  key: "Everest_turmeric",
  name: "Everest Turmeric Powder",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/1698902870466_dpwdfn.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_turmeric")
},
{
  id: "Everest_chhole_masala",
  key: "Everest_chhole_masala",
  name: "Everest Chhole Masala",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/everest-chole-masala_s2l5pd.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_chhole_masala")
},
{
  id: "Everest_chhat_masala",
  key: "Everest_chhat_masala",
  name: "Everest Chhat Masala",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/image_uozbp6.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_chhat_masala")
},
{
  id: "Everest_cumin_powder",
  key: "Everest_cumin_powder",
  name: "Everest Cumin Powder/Jeera Powder",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Everest_20Cumin_20Powder_2050_20g_20Carton-1_sjscbd.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_cumin_powder")
},
{
  id: "Everest_dry_mango",
  key: "Everest_dry_mango",
  name: "Everest Dry Mango Powder/Aamchur Powder",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Everest_20Powder_20-_20Dry_20Mango_2050_20g-1_f3wigi.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_dry_mango")
}
,
{
  id: "Everest_garam_masala",
  key: "Everest_garam_masala",
  name: "Everest Garam Masala",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/IPowderMasala100gEVRS3738xx281220_5_B_sfqael.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_garam_masala")
}
,
{
  id: "Everest_sabji_masala",
  key: "Everest_sabji_masala",
  name: "Everest Sabji Masala",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/everest-sabji-masala_gl6ez4.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_sabji_masala")
}
,
{
  id: "Everest_meet_masala",
  key: "Everest_meet_masala",
  name: "Everest Meet Masala",
  category: "staples",
  subCategory: "Everest",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/EVEREST-MEAT-MASALA-50GM_dwrymi.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Everest_meet_masala")
},
{
  id: "Amul_ghee",
  key: "Amul_ghee",
  name: "Amul Ghee",
  category: "staples",
  subCategory: "Ghee",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/s-l640_018eed94-a502-4db7-88b4-6b854b75f987_grcj2x.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Amul_ghee")
},
{
  id: "Sudha_ghee",
  key: "Sudha_ghee",
  name: "Sudha Ghee",
  category: "staples",
  subCategory: "Ghee",
  unit: "500ml",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/special-ghee_hgzfby.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Sudha_ghee")
},
{
  id: "Patanjali_ghee",
  key: "Patanjali_ghee",
  name: "Patanjali Ghee",
  category: "staples",
  subCategory: "Ghee",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/40009511_13-patanjali-cow-ghee_vjnkru.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Patanjali_ghee")
}

,
{
  id: "Peanut",
  key: "Peanut",
  name: "Moongfali Daana (Kachha Badam)",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/1_ave9zq.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Peanut")
},
{
  id: "Pista",
  key: "Pista",
  name: "Salted Pista",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "250gm",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775224689/pistachio-salted-irani_dweog8.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Pista")
},
{
  id: "Lion_Arabian_dates",
  key: "Lion_Arabian_dates",
  name: "Lion Arabian Dates",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775224726/image_ftarxc.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Lion_Arabian_dates")
},
// {
//   id: "JWEL_Farmer_salted_pista",
//   key: "JWEL_Farmer_salted_pista",
//   name: "JWEL Farmer Salted Pista",
//   category: "staples",
//   subCategory: "Dried Fruits",
//   unit: "200gm",
//   image: "https://res.cloudinary.com/dkdqid09e/image/upload/40009511_13-patanjali-cow-ghee_vjnkru.png",
//   description: "Fresh juicy oranges.",
//   ...getProductData("JWEL_Farmer_salted_pista")
// },
{
  id: "Makhana",
  key: "Makhana",
  name: "Makhana",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "250gm",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775224819/Phool-Makhana_dkfyoh.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Makhana")
},
{
  id: "Tata_kismiss",
  key: "Tata_kismiss",
  name: "Tata Sampann Premium Kismiss",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775224848/61JL78FJWOL._AC_UF894_1000_QL80__s8jff6.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Tata_kismiss")
},
{
  id: "Anjeer",
  key: "Anjeer",
  name: "Anjeer",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "250gm",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1775224872/Anjeer-Small_p7ghph.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Anjeer")
},
{
  id: "Almonds",
  key: "Almonds",
  name: "Almonds Whole",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/almond-1000x1000_a811a535-53bb-4715-ac02-27074e07646e_ovflsy.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Almonds")
},
{
  id: "Tata_walnuts",
  key: "Tata_walnuts",
  name: "Tata Sampann Walnuts",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "200gm",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/71wnuZ37mTL._SL1500-removebg-preview_jnyv4a.png",
  description: "Fresh juicy oranges.",
  ...getProductData("Tata_walnuts")
},
{
  id: "Kismis",
  key: "Kismis",
  name: "Kismis",
  category: "staples",
  subCategory: "Dried Fruits",
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Kismis-40_zplhxp.jpg",
  description: "Fresh juicy oranges.",
  ...getProductData("Kismis")
// },
// {
//   id: "Kismis_tukda",
//   key: "Kismis_tukda",
//   name: "Kismis Tukda",
//   category: "staples",
//   subCategory: "Dried Fruits",
//   unit: "1kg",
//   image: "https://res.cloudinary.com/dkdqid09e/image/upload/40009511_13-patanjali-cow-ghee_vjnkru.png",
//   description: "Fresh juicy oranges.",
//   ...getProductData("Kismis_tukda")
// },
// {
//   id: "Lion Qyno Dates",
//   key: "Lion_Qyno_Dates",
//   name: "Lion Qyno Dates",
//   category: "staples",
//   subCategory: "Dried Fruits",
//   unit: "1kg",
//   image: "https://res.cloudinary.com/dkdqid09e/image/upload/40009511_13-patanjali-cow-ghee_vjnkru.png",
//   description: "Fresh juicy oranges.",
//   ...getProductData("Lion_Qyno_Dates")
// },
// {
//   id: "Tata_sampann_kaju",
//   key: "Tata_sampann_kaju",
//   name: "Tata Sampann Premium Kaju",
//   category: "staples",
//   subCategory: "Dried Fruits",
//   unit: "1kg",
//   image: "https://res.cloudinary.com/dkdqid09e/image/upload/40009511_13-patanjali-cow-ghee_vjnkru.png",
//   description: "Fresh juicy oranges.",
//   ...getProductData("Tata_sampann_kaju")
// },
// {
//   id: "Tata_sampann_Almonds",
//   key: "Tata_sampann_Almonds",
//   name: "Tata Sampann Premium Almonds",
//   category: "staples",
//   subCategory: "Dried Fruits",
//   unit: "1kg",
//   image: "https://res.cloudinary.com/dkdqid09e/image/upload/40009511_13-patanjali-cow-ghee_vjnkru.png",
//   description: "Fresh juicy oranges.",
//   ...getProductData("Tata_sampann_Almonds")
}


];