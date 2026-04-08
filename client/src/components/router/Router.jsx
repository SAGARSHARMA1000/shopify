import React from "react";
import { useApp } from "../../context/AppContext";

import HomePage from "../../pages/HomePage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import OrderSuccessPage from "../../pages/OrderSuccessPage";
import MyOrdersPage from "../../pages/MyOrdersPage";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";

import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminProductsPage from "../../pages/admin/AdminProductsPage";
import AdminOrdersPage from "../../pages/admin/AdminOrdersPage";
import HotDealsPage from "../layout/HotDealsPage";
import ContactPage from "../layout/ContactPage";

import UserDashboard from "../../pages/customer/UserDashboard";
import CustomersPage from "../../pages/admin/CustomersPage";
import AdminHotDealPage from "../../pages/admin/AdminHotDealPage";
import ForgotPassword from "../../pages/utility/ForgotPassword";
import ResetPassword from "../../pages/utility/ResetPassword";
import VerifyOtpPage from "../../pages/utility/verifyOtpPage";

export default function Router() {
  const { currentPage } = useApp();

  switch (currentPage) {
    case "home":
      return <HomePage />;
    case "hotdeals":
      return <HotDealsPage />;
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
      case "signup":
      return <SignupPage role="user" />;
       case "userDashboard":
      return <UserDashboard role="user" />;
       case "otp":
      return <VerifyOtpPage role="user" />;
       case "forgot":
      return <ForgotPassword/>;
       case "reset-password":
      return <ResetPassword />;
    case "contact":
      return <ContactPage role="user" />;
    case "admin-login":
      return <LoginPage role="admin"/>;
    case "admin-dashboard":
      return <AdminDashboard />;
    case "admin-products":
      return <AdminProductsPage />;
    case "admin-orders":
      return <AdminOrdersPage />;
      case "admin-customers":
      return <CustomersPage />;
      case "edit-banner":
      return <AdminHotDealPage />;
    default:
      return <HomePage />;
  }
}