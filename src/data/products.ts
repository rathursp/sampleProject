export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  stock?: number;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: "vegetables", name: "Vegetables", icon: "🥬", color: "bg-green-100" },
  { id: "fruits", name: "Fruits", icon: "🍎", color: "bg-red-100" },
  { id: "dairy", name: "Dairy", icon: "🥛", color: "bg-blue-100" },
  { id: "staples", name: "Staples", icon: "🌾", color: "bg-yellow-100" },
  { id: "snacks", name: "Snacks", icon: "🍿", color: "bg-orange-100" },
  { id: "beverages", name: "Beverages", icon: "🧃", color: "bg-purple-100" },
];

export const products: Product[] = [

/* Vegetables */

{
  name: "Fresh Tomatoes",
  category: "vegetables",
  price: 25,
  originalPrice: 40,
  unit: "500g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/250px-Tomato_je_c1cuys.jpg",
  description: "Farm-fresh red tomatoes, perfect for curries and salads.",
  inStock: true,
  featured: true
},
{
  name: "Green Spinach",
  category: "vegetables",
  price: 25,
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/20-palak-seeds-ronofic-original-imah2ymwrcnybxg3_wgt1oa.jpg",
  description: "Fresh organic spinach leaves, rich in iron.",
  inStock: true
},
{
  name: "Onions",
  category: "vegetables",
  price: 35,
  originalPrice: 45,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/df54c034-a747-4f00-81ce-47191ab4972c.9efd669f6daffd19ffaf32e270ef7598_l0qyns.jpg",
  description: "Premium quality onions for everyday cooking.",
  inStock: true
},
{
  name: "Potatoes",
  category: "vegetables",
  price: 28,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465257/potatoes-scaled_apgoq1.jpg",
  description: "Fresh potatoes, ideal for all types of dishes.",
  inStock: true
},
{
  name: "Green Capsicum",
  category: "vegetables",
  price: 35,
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773464596/cap_wsipzy.png",
  description: "Fresh green bell peppers, crunchy and flavorful.",
  inStock: true
},
{
  name: "Cauliflower",
  category: "vegetables",
  price: 40,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466236/Chou-fleur_02_q3jane.jpg",
  description: "Fresh farm cauliflower, perfect for curries and sabzi.",
  inStock: true
},
{
  name: "Cabbage",
  category: "vegetables",
  price: 22,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465852/Freshpoint-green-cabbage_o6lnvg.jpg",
  description: "Crisp and fresh cabbage, ideal for salads and stir fry.",
  inStock: true
},
{
  name: "Green Peas (Matar)",
  category: "vegetables",
  price: 30,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Green-Peas_cjbnl1.jpg",
  description: "Sweet and tender green peas perfect for pulao and curry.",
  inStock: true,
  popular: true
},
{
  name: "Green Chilli",
  category: "vegetables",
  price: 35,
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465906/Artboard_1_copy_grande_nzpjv5.jpg",
  description: "Fresh green chillies adding perfect spice to meals.",
  inStock: true
},
{
  name: "Garlic",
  category: "vegetables",
  price: 40,
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465918/garlic_twlb3z.jpg",
  description: "Aromatic garlic cloves essential for Indian cooking.",
  inStock: true
},
{
  name: "Ginger",
  category: "vegetables",
  price: 30,
  unit: "250g",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465931/ginger-80e324d-scaled_fzdona.jpg",
  description: "Fresh ginger roots great for tea and curries.",
  inStock: true
},
{
  name: "Beetroot",
  category: "vegetables",
  price: 40,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465953/beetroot_mbtqg3.jpg",
  description: "Healthy beetroot perfect for juices and salads.",
  inStock: true
},
{
  name: "Lemon",
  category: "vegetables",
  price: 15,
  unit: "2pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773465981/PXL_20250116_1607549042_rpsylo.jpg",
  description: "Juicy lemons for refreshing drinks and cooking.",
  inStock: true
},
{
  name: "Bottle Gourd (Lauki)",
  category: "vegetables",
  price: 40,
  unit: "1pc",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466007/1524_yup6kf.jpg",
  description: "Tender bottle gourd perfect for healthy meals.",
  inStock: true
},
{
  name: "Brinjal (Baingan)",
  category: "vegetables",
  price: 50,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466049/round_eggplant_800x_ddqgtf.png",
  description: "Fresh brinjal perfect for bharta and curry dishes.",
  inStock: true
},
{
  name: "Cucumber",
  category: "vegetables",
  price: 50,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773466071/Cucumber_yzbwtt.jpg",
  description: "Crunchy cucumbers perfect for salads and raita.",
  inStock: true
},

/* Fruits */

{
  name: "Shimla Apple",
  category: "fruits",
  price: 180,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490343/WhatsApp-Image-2022-01-11-at-16.53.57-1_rlxs3j.jpg",
  description: "Premium Shimla apples known for crisp texture.",
  inStock: true,
  popular: true
},
{
  name: "Pineapple",
  category: "fruits",
  price: 50,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490370/71_qAJehpkL_djbgag.jpg",
  description: "Fresh tropical pineapple perfect for juices.",
  inStock: true
},
{
  name: "Pomegranate",
  category: "fruits",
  price: 210,
  unit: "1kg",
  image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400&h=400&fit=crop",
  description: "Sweet pomegranates packed with antioxidants.",
  inStock: true,
  popular: true
},
{
  name: "Chiniya Banana",
  category: "fruits",
  price: 70,
  unit: "13pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/banana-1_qryzdr.jpg",
  description: "Small sweet chiniya bananas.",
  inStock: true,
  popular: true
},
{
  name: "Kiwi",
  category: "fruits",
  price: 75,
  unit: "3pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490473/330px-Kiwi__28Actinidia_chinensis_29_1_Luc_Viatour_qbolui.jpg",
  description: "Vitamin C rich kiwi fruits.",
  inStock: true,
  popular: true
},
{
  name: "Papaya",
  category: "fruits",
  price: 60,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490522/330px-Carica_papaya_dsc07806_hs8z2j.jpg",
  description: "Ripe nutritious papaya.",
  inStock: true,
  popular: true
},
{
  name: "Singapuri Banana",
  category: "fruits",
  price: 80,
  unit: "13pcs",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490635/42E9as7NaTaAi4A6JcuFwG-1200-80_wq8lbp.jpg",
  description: "Fresh Singapuri bananas.",
  inStock: true
},
{
  name: "Imported Guava",
  category: "fruits",
  price: 150,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/Imported-Guava_kp7rjf.jpg",
  description: "Premium imported guava.",
  inStock: true
},
{
  name: "Strawberry",
  category: "fruits",
  price: 140,
  unit: "200g",
  image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
  description: "Fresh strawberries for desserts.",
  inStock: true,
  popular: true
},
{
  name: "Grapes",
  category: "fruits",
  price: 160,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490715/598fa4dc3131dff06c11acffafcc0e6a_dalfya.jpg",
  description: "Sweet juicy grapes.",
  inStock: true
},
{
  name: "Watermelon",
  category: "fruits",
  price: 85,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/watermeloen_2_eu3c0h.jpg",
  description: "Refreshing watermelon.",
  inStock: true
},
{
  name: "Fuji Apple",
  category: "fruits",
  price: 290,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490833/FujiApples4pieces_1_spnh7x.png",
  description: "Premium Fuji apples.",
  inStock: true
},
{
  name: "Kinnaur Apple",
  category: "fruits",
  price: 220,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490865/images_6cfaa187-464d-40c5-8510-4c47e4cc9994_201x_cses4h.jpg",
  description: "Famous Himachal Kinnaur apples.",
  inStock: true
},
{
  name: "Orange",
  category: "fruits",
  price: 100,
  unit: "1kg",
  image: "https://res.cloudinary.com/dkdqid09e/image/upload/v1773490919/Tangerine-SpotlessFruitsIndia_1024x1024_n3d2oy.png",
  description: "Fresh juicy oranges.",
  inStock: true
}

].map((product) => ({
  ...product,
  id: crypto.randomUUID(),
  featured: product.category === "vegetables" ? true : product.featured
}));