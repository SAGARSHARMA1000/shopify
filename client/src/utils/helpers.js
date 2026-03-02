export const INITIAL_PRODUCTS = [
  { id: 1, title: "Premium Wireless Headphones", price: 299, discount: 10, category: "Electronics", description: "High-fidelity audio with noise cancellation.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" },
  { id: 2, title: "Minimalist Leather Watch", price: 150, discount: 0, category: "Accessories", description: "Timeless design for every occasion.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" },
  { id: 3, title: "Smart Fitness Tracker", price: 89, discount: 15, category: "Electronics", description: "Monitor your health and activity daily.", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800" },
  { id: 4, title: "Ergonomic Office Chair", price: 450, discount: 5, category: "Furniture", description: "Maximum comfort for long work hours.", image: "https://images.unsplash.com/photo-1505843490701-5be5d0b19d58?w=800" },
  { id: 5, title: "Cotton Canvas Backpack", price: 65, discount: 0, category: "Accessories", description: "Durable and stylish for daily commute.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800" },
  { id: 6, title: "Portable Bluetooth Speaker", price: 120, discount: 20, category: "Electronics", description: "Crystal clear sound in a compact size.", image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=800" },
];

export const getEffectivePrice = (price, discount) => {
  if (!discount || discount <= 0) return price;
  return Number((price * (1 - discount / 100)).toFixed(2));
};