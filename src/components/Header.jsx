import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand  href="https://flowbite-react.com">

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Movie App
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
