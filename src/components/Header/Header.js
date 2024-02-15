import React from "react";
import { LogoutBtn, Container, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { status } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !status },
    { name: "Signup", slug: "/signup", active: !status },
    { name: "All Posts", slug: "/all-posts", active: status },
    { name: "Add Post", slug: "/add-post", active: status },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to={"/"}>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((nav) =>
              nav.active ? (
                <li key={nav.name}>
                  <button
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={() => navigate(nav.slug)}
                  >
                    {nav.name}
                  </button>
                </li>
              ) : null
            )}
            {status && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
