import Logo from "../../images/logo.png";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HeaderWrapper, LogoWrapper, LinkingWrapper } from './Navigation.styled';
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";

export default function Navigation() {
  return (
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
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/catalog" element={<Catalog/>}/>
          <Route exact path="/cart" element="{<Cart/>}"/>
      </Routes>
    </BrowserRouter>
  );
};