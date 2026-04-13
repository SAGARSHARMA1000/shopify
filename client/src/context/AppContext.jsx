import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getEffectivePrice } from "../utils/helpers";
import {
  fetchProducts,fetchProductById,
  createProduct,updateProduct,deleteProductApi,fetchHotDeals, fetchLatestHotDeal} from "../api/productApi";
import { placeCODOrder,createOnlineOrder, getAllOrders,getMyOrders } from "../api/orderApi";
import loadRazorpay from "../utils/loadRazorpay";
import { getHotDealBanner } from "../api/hotDealApi";
import { loginUser,getProfileApi,updateProfileApi,changePasswordApi,deleteAccountApi } from "../api/authApi";
const AppContext = createContext();
export const useApp = () => useContext(AppContext);
import Loader from "../utils/Loader";



export const AppProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);
 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [hotDeals, setHotDeals] = useState([]);
  const [latestHotDeal, setLatestHotDeal] = useState(null);
  const [showHotDealAd, setShowHotDealAd] = useState(false);
  const [hotDealBanner, setHotDealBanner] = useState(null);

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };
useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("userInfo"));
  if (storedUser) {
    setUser(storedUser);
  }
}, []);

useEffect(() => {
  setSearchQuery("");
}, [currentPage]);


useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, [currentPage]);
  

const login = async (email, password, role) => {
  try {
    setLoading(true);
    const { data } = await loginUser({ email, password }); 
  
        // ✅ Optional UI-level role restriction
    if (role === "admin" && data.role !== "admin") {
      showToast("You are not an admin");
      setLoading(false);
      return;
    }
    // ✅ Store full user object (token included)
    localStorage.setItem("userInfo", JSON.stringify(data));

    // ✅ Set user globally
     setUser(data);
      setTimeout(() => {
       setCurrentPage(data.role === "admin" ? "admin-dashboard" : "home");
       showToast("Login successful");
       setLoading(false);
     }, 3100); 

  } catch (error) {
    showToast(error.response?.data?.message || "Login failed");
     setLoading(false);
  }
};

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    setCart([])
    setCurrentPage("home");
    showToast("Logged out successfully");
  };

const fetchProfile = async () => {
  try {
    const { data } = await getProfileApi();
    setUser(data);

    // ✅ keep token safe
    const old = JSON.parse(localStorage.getItem("userInfo"));
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...data, token: old?.token })
    );

  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (form) => {
  try {
    const { data } = await updateProfileApi(form);
    const old = JSON.parse(localStorage.getItem("userInfo"));
    const updatedUser = { ...data, token: old?.token };
    setUser(updatedUser);
    localStorage.setItem("userInfo", JSON.stringify(updatedUser));

    showToast("Profile updated");
  } catch (error) {
    showToast(error.response?.data?.message);
  }
};

const updatePassword = async (passwordData) => {
  try {
    const { data } = await changePasswordApi(passwordData);
    showToast(data.message);
  } catch (error) {
    showToast(error.response?.data?.message);
  }
};

const deleteAccount = async () => {
  try {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirmDelete) return;

    const { data } = await deleteAccountApi();

    // ✅ Clear everything
    localStorage.removeItem("userInfo");
    setUser(null);
    showToast(data.message || "Account deleted");
    setCurrentPage("home");

  } catch (error) {
    showToast(error.response?.data?.message || "Delete failed");
  }
};


  const loadProducts = async () => {
    try {
      setIsLoading(true);

      const { data } = await fetchProducts();

      setProducts(data);

    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setIsLoading(false);
    }
  };
   useEffect(() => {
    loadProducts();
    openHotDealAd();
  }, []);


 
  const getProductById = async (id) => {
     try {
  //  console.log("Fetching product ID:", id);

    const { data } = await fetchProductById(id);

    // ✅ CORRECT DEBUG
    //console.log("API RESPONSE:", data);
    //console.log("IMAGES FIELD:", data.images);
    //console.log("IMAGES TYPE:", typeof data.images);
    //console.log("IS ARRAY:", Array.isArray(data.images));

    setSelectedProduct(data);

  } catch (error) {
    console.log("ERROR FETCHING PRODUCT:", error);
  }
};
const startCheckout = (items) => {
  setCheckoutItems(items);
  setCurrentPage("checkout");
};

const addToCart = (product) => {
  if (!user) {
    showToast("Please login to add items to cart", "error");
    setCurrentPage("login");
    return;
  }

  setCart((prev) => {
    const existing = prev.find((item) => item._id === product._id);

    if (existing) {
      return prev.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });

  showToast(`${product.title} added to cart!`);
};

const handleBuyNow = async (id) => {
  try {
    const { data } = await fetchProductById(id);

    startCheckout([
      {
        ...data,
        quantity: 1,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};
const checkoutFromCart = (selectedItems) => {
  const selectedProducts = cart.filter((item) =>
    selectedItems.includes(item._id)
  );

  startCheckout(selectedProducts);
};

const updateCartQuantity = (id, delta) => {
  setCart((prev) =>
    prev
      .map((item) => {
        if (item._id === id) {
          const newQty = item.quantity + delta;

          return {
            ...item,
            quantity: newQty < 1 ? 1 : newQty,
          };
        }
        return item;
      })
  );
};

const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item._id !== id));
  showToast("Item removed from cart");
};

const cartTotal = useMemo(() => {
  return cart.reduce((acc, item) => {
    const price = getEffectivePrice(item.price, item.discount);

    return acc + price * (item.quantity || 1);
  }, 0);
}, [cart]);


const getHotDealsProducts = async () => {
  try {

    const { data } = await fetchHotDeals();

    if (data.success) {
      setHotDeals(data.products);
    }

  } catch (error) {
    console.log(error);
  }
};

const openHotDealAd = async () => {
  try {
   // console.log("Fetching hot deal...");
    const { data } = await fetchLatestHotDeal();
     //  console.log(data);

    if (data.success) {
      setLatestHotDeal(data.product);
      setShowHotDealAd(true);
    }

  } catch (error) {
    console.log(error);
  }
};



const fetchHotDealBanner = async () => {
  try {
    const { data } = await getHotDealBanner();

    if (data.success) {
      setHotDealBanner(data.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const saveProduct = async (product,id=null) => {
    try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    if (!token) {
      throw new Error("No token found");
    }
      if (id) {
        const { data } = await updateProduct(id, product,token);

        setProducts(prev=>prev.map((p) =>
          p._id === data._id ? data : p
        ));
        showToast("Product added successfully");
        setCurrentPage("admin-products");

      } else {
        setIsLoading(true);
        const { data } = await createProduct(product,token);
        setProducts(prev=>[...prev, data]);
        setIsLoading(false);
      //  showToast("Product added successfully");
       // setCurrentPage("admin-products");
      }

    } catch (err) {
      console.log(err);
    }
  };


const deleteProduct = async (id) => {
  try {
    setIsLoading(true);

    await deleteProductApi(id); // your API call

    // ✅ update UI instantly
    setProducts((prev) => prev.filter((p) => p._id !== id));

    showToast("Product deleted successfully 🗑️");

  } catch (error) {
    console.log(error);
    showToast(
      error?.response?.data?.message || "Failed to delete product ❌"
    );
  } finally {
    setIsLoading(false);
  }
};



const placeOrder = async (formData) => {
  //const token = localStorage.getItem("token");
  const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
    try {
      const {data} = await placeCODOrder(formData, token);

      if (data.success) {
        // ✅ clear cart after success
        // optional: redirect or update UI
        // console.log("Order Success:", res.data);
  
        showToast("Order placed successfully!");
        setCart([]);
        setCheckoutItems([]); 
        setCurrentPage("order-success");
      }
    } catch (error) {
      console.error("Order Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Order failed");
    }
  };
const fetchAllOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await getAllOrders(token);

    if (data.success) {
      setOrders(data.orders);
    }

  } catch (error) {
    console.log("Fetch orders error:", error);
  }
};

const fetchMyOrders = async () => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await getMyOrders(token);
  //   console.log("Orders API response:", data); // DEBUG
    if (data.success) {
      setOrders(data.orders);
    }

  } catch (error) {
    console.log("Fetch my orders error:", error);
  }
};

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
    showToast(`Order status updated to ${newStatus}`);
  };


  return (
    <AppContext.Provider value={{
      user, login, logout, fetchProfile,updateProfile,updatePassword, deleteAccount,
      products,loadProducts, deleteProduct, saveProduct,
      cart, addToCart, removeFromCart, updateCartQuantity, cartTotal, startCheckout,checkoutItems,
      orders, placeOrder,fetchAllOrders,fetchMyOrders, updateOrderStatus,
      currentPage, setCurrentPage,
      selectedProductId, setSelectedProductId,selectedProduct,setSelectedProduct,getProductById,
      showToast, isLoading, setIsLoading,loading,
      searchQuery, setSearchQuery,
      toasts,
      hotDeals,latestHotDeal,showHotDealAd,setShowHotDealAd,getHotDealsProducts,openHotDealAd,
      hotDealBanner,fetchHotDealBanner
    }}>
      {children}
    </AppContext.Provider>
  );
};