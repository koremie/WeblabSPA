import Logo from "../../images/logo.png";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HeaderWrapper, LogoWrapper, LinkingWrapper, BodyWrapper } from './Navigation.styled';
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import ItemPage from "../ItemPage/ItemPage";
import Cart from "../Cart/Cart";

export default function Navigation() {
  return (
    <BodyWrapper>
      <BrowserRouter>
        <HeaderWrapper>
          <NavLink exact to="/home">
            <LogoWrapper>
              <img src={Logo} alt="logo" />
            </LogoWrapper>
          </NavLink>

          <LinkingWrapper>
            <ul>
              <li>
                <NavLink
                  exact to="/home"
                  className={({ isActive }) => isActive ? "selected" : undefined}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact to="/catalog"
                  className={({ isActive }) => isActive ? "selected" : undefined}
                >
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact to="/cart"
                  className={({ isActive }) => isActive ? "selected" : undefined}
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </LinkingWrapper>
        </HeaderWrapper>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/catalog/:id" element={<ItemPage/>}/>
        </Routes>
      </BrowserRouter>
    </BodyWrapper>
  );
};