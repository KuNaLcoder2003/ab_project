
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./Navbar"
import { useState } from "react";

export function NavbarDemo({ isLoggedIn = false, setIsLoggedIn }) {
  const navItems = [
    {
      name: "Home",
      link: "/landing",
    },
    {
      name: "Insights",
      link: "/getInsights",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full mb-[4rem]">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {isLoggedIn ? <NavbarButton variant="secondary" onClick={function(){
              navigate("/");
              localStorage.clear()
              setIsLoggedIn(false);
            }}>Logout</NavbarButton> : <NavbarButton variant="secondary" onClick={function()  {
              navigate("/signin");
              
            }}>Login</NavbarButton>}
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => navigate(`${item.link}`)}
                className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => { setIsMobileMenuOpen(false) ; navigate('/signin') } }
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}
      {/* Navbar */}
    </div>
  );
}


