import React from "react";
import { useApp } from "../../context/AppContext";

import HomePage from "../../pages/HomePage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import OrderSuccessPage from "../../pages/OrderSuccessPage";
import MyOrdersPage from "../../pages/MyOrdersPage";
import LoginPage from "../../pages/LoginPage";

import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminProductsPage from "../../pages/admin/AdminProductsPage";
import AdminOrdersPage from "../../pages/admin/AdminOrdersPage";

export default function Router() {
  const { currentPage } = useApp();

  switch (currentPage) {
    case "home":
      return <HomePage />;
    case "product-details":
      return <ProductDetailsPage />;
    case "cart":
      return <CartPage />;
    case "checkout":
      return <CheckoutPage />;
    case "order-success":
      return <OrderSuccessPage />;
    case "my-orders":
      return <MyOrdersPage />;
    case "login":
      return <LoginPage role="user" />;
    case "admin-login":
      return <LoginPage role="admin" />;
    case "admin-dashboard":
      return <AdminDashboard />;
    case "admin-products":
      return <AdminProductsPage />;
    case "admin-orders":
      return <AdminOrdersPage />;
    default:
      return <HomePage />;
  }
}