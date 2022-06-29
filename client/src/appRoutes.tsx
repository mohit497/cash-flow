import Cashier from "components/cashier/cashier";
import Home from "components/home/home";
import Login from "components/login";
import Products from "components/product/products";
import Register from "components/register";
import Shops from "components/shop/shop";
import Store from "components/store/store";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/products" element={<Products />}></Route>
      <Route  path="/shops" element={<Shops />}></Route>
      <Route  path="/cashier" element={<Cashier />}></Route>
      <Route  path="/store" element={<Store />}></Route>
      <Route  path="/login" element={<Login />}></Route>
      <Route  path="/register" element={<Register />} />
      <Route  path="/cashier" element={<Cashier />}></Route>
    </Routes>
  );
};
