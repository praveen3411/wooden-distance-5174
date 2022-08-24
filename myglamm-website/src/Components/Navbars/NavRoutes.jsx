import { Route, Routes } from "react-router-dom";
import Bag from "../Mainpages/Bag";
import Collection from "../Mainpages/Collection";
import Haircare from "../Mainpages/Haircare";
import Home from "../Mainpages/Home";
import Makeup from "../Mainpages/Makeup";
import MyGlam from "../Mainpages/MyGlam";
import Myglammstore from "../Mainpages/Myglammstore";
import Offers from "../Mainpages/Offers";
import Rewards from "../Mainpages/Rewards";
import Sanitizing from "../Mainpages/Sanitizing";
import Shopnow from "../Mainpages/Shopnow";
import Skincare from "../Mainpages/Skincare";
import User from "../Mainpages/User";

export default function NavRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopnow" element={<Shopnow />} />
        <Route path="/myglamstore" element={<Myglammstore />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/user" element={<User />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/haircare" element={<Haircare />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/santizing" element={<Sanitizing />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/myglam" element={<MyGlam />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </div>
  );
}
