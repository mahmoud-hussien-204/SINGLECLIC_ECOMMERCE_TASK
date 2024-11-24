import React from "react";

import Container from "./Container";

import Image from "next/image";

import ImageAvatar from "@/app/assets/avatar.svg";

import Link from "next/link";

import CartButton from "./CartButton";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="font-semibold text-xl">
              Brand Name
            </Link>
          </div>
          <div className="flex-none">
            <CartButton />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image alt="Tailwind CSS Navbar component" src={ImageAvatar} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
