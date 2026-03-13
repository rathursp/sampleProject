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
  stock?: number;   // add this
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
  {
    id: "1",
    name: "Fresh Tomatoes",
    category: "vegetables",
    price: 25,
    originalPrice: 40,
    unit: "500g",
    image: "https://69b3e2afd5fa7152051c7e21.imgix.net/Screenshot%202026-03-13%20154445.png?w=400&h=400&fit=crop",
    description: "Farm-fresh red tomatoes, perfect for curries and salads.",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Green Spinach",
    category: "vegetables",
    price: 25,
    unit: "250g",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    description: "Fresh organic spinach leaves, rich in iron.",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Onions",
    category: "vegetables",
    price: 35,
    originalPrice: 45,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=400&fit=crop",
    description: "Premium quality onions for everyday cooking.",
    inStock: true,
  },
  {
    id: "4",
    name: "Potatoes",
    category: "vegetables",
    price: 28,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82ber40?w=400&h=400&fit=crop",
    description: "Fresh potatoes, ideal for all types of dishes.",
    inStock: true,
  },
  {
    id: "5",
    name: "Fresh Bananas",
    category: "fruits",
    price: 40,
    unit: "1 dozen",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    description: "Ripe yellow bananas, naturally sweet.",
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Alphonso Mangoes",
    category: "fruits",
    price: 250,
    originalPrice: 320,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    description: "Premium Alphonso mangoes, king of fruits.",
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Red Apples",
    category: "fruits",
    price: 150,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    description: "Crispy and juicy red apples from Shimla.",
    inStock: true,
  },
  {
    id: "8",
    name: "Full Cream Milk",
    category: "dairy",
    price: 60,
    unit: "1L",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    description: "Fresh full cream milk, pasteurized and pure.",
    inStock: true,
    featured: true,
    stock: 4
  },
  {
    id: "9",
    name: "Paneer",
    category: "dairy",
    price: 90,
    unit: "200g",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
    description: "Fresh cottage cheese, soft and creamy.",
    inStock: true,
  },
  {
    id: "10",
    name: "Curd",
    category: "dairy",
    price: 45,
    unit: "400g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    description: "Thick and creamy homestyle curd.",
    inStock: true,
  },
  {
    id: "11",
    name: "Basmati Rice",
    category: "staples",
    price: 180,
    originalPrice: 220,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    description: "Premium aged basmati rice, long grain.",
    inStock: true,
    featured: true,
  },
  {
    id: "12",
    name: "Wheat Flour (Atta)",
    category: "staples",
    price: 55,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop",
    description: "Whole wheat flour for soft rotis.",
    inStock: true,
  },
  {
    id: "13",
    name: "Masala Chips",
    category: "snacks",
    price: 20,
    unit: "100g",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop",
    description: "Crunchy masala flavored potato chips.",
    inStock: true,
  },
  {
    id: "14",
    name: "Mixed Namkeen",
    category: "snacks",
    price: 35,
    unit: "200g",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527b711e?w=400&h=400&fit=crop",
    description: "Traditional mixed namkeen snack.",
    inStock: false,
  },
  {
    id: "15",
    name: "Mango Juice",
    category: "beverages",
    price: 45,
    unit: "1L",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
    description: "Pure mango juice, no added preservatives.",
    inStock: true,
  },
  {
    id: "16",
    name: "Green Capsicum",
    category: "vegetables",
    price: 35,
    unit: "250g",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    description: "Fresh green bell peppers, crunchy and flavorful.",
    inStock: true,
  },
];
