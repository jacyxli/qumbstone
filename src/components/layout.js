import React from "react";
import "@fontsource/noto-sans-jp";
import Navbar from "./navbar";
import Header from "./header";
import ContentContainer from "./content-container";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar toggleMenu={() => console.log("menu toggled")}></Navbar>

      <ContentContainer>
        <Header />
      </ContentContainer>
      {children}
    </main>
  );
}
