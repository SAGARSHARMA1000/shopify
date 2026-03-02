import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { INITIAL_PRODUCTS, getEffectivePrice } from "../utils/helpers";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) || INITIAL_PRODUCTS);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem("orders")) || []);
  const [toasts, setToasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("orders", JSON.stringify(orders));
    user ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.removeItem("user");
  }, [cart, products, orders, user]);

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const login = (email, password, role) => {
    setIsLoading(true);
    setTimeout(() => {
      const newUser = { email, role, id: role === "admin" ? "admin_1" : "user_1", name: role === "admin" ? "Admin User" : "Customer" };
      setUser(newUser);
      setCurrentPage(role === "admin" ? "admin-dashboard" : "home");
      showToast(`Logged in as ${role}`);
      setIsLoading(false);
    }, 800);
  };

  const logout = () => {
    setUser(null);
    setCurrentPage("home");
    showToast("Logged out successfully");
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.title} added to cart!`);
  };

  const updateCartQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast("Item removed from cart");
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = getEffectivePrice(item.price, item.discount);
      return acc + price * item.quantity;
    }, 0);
  }, [cart]);

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast("Product deleted");
  };

  const saveProduct = (productData) => {
    if (productData.id) {
      setProducts(prev => prev.map(p => p.id === productData.id ? productData : p));
      showToast("Product updated");
    } else {
      setProducts(prev => [...prev, { ...productData, id: Date.now() }]);
      showToast("Product added");
    }
  };

  const placeOrder = (shippingInfo) => {
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 90000) + 10000}`,
      userId: user.id,
      items: [...cart],
      total: cartTotal,
      status: "Booked",
      date: new Date().toLocaleDateString(),
      shipping: shippingInfo
    };
    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setCurrentPage("order-success");
    showToast("Order placed successfully!");
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    showToast(`Order status updated to ${newStatus}`);
  };

  return (
    <AppContext.Provider value={{
      user, login, logout,
      products, deleteProduct, saveProduct,
      cart, addToCart, removeFromCart, updateCartQuantity, cartTotal,
      orders, placeOrder, updateOrderStatus,
      currentPage, setCurrentPage,
      selectedProductId, setSelectedProductId,
      showToast, isLoading, setIsLoading,
      searchQuery, setSearchQuery,
      toasts
    }}>
      {children}
    </AppContext.Provider>
  );
};