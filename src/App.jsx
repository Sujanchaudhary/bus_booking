import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/home/HomeLayout";
import Home from "./components/home/Home";
import AddBus from "./components/Bus/AddBus";
import BusSingleInfo from "./components/Bus/BusSingleInfo";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import QrScan from "./components/Bus/Checkout/QrScan";
import AllBuses from "./components/Bus/AllBuses";
import Dashboard from "./components/admin/Dashboard";
import AdminLayout from "./components/admin/AdminLayout";
import BusTable from "./components/admin/BusTable";
import PaymentTable from "./components/admin/PaymentTable";
import DriverKyc from "./components/home/DriverKyc";
import Profile from "./components/Profile/Profile";
import PrintTicket from "./components/Bus/Checkout/PrintTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />} path="">
          <Route element={<Home />} path="/" />
          <Route element={<AddBus />} path="/addbus" />
          <Route element={<BusSingleInfo />} path="/single" />{" "}
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<QrScan />} path="/qr" />
          <Route element={<AllBuses />} path="/buses" />
          <Route element={<DriverKyc />} path="/kyc" />
          <Route element={<Profile />} path="/profile" />
        </Route>
      </Routes>
      <Routes>
        <Route element={<PrintTicket />} path="/print" />
      </Routes>

      {/* Admin */}

      <Routes>
        <Route element={<AdminLayout />} path="/admin/">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<BusTable />} path="buses" />
          <Route element={<PaymentTable />} path="payment" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
