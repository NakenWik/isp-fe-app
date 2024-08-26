'use client'

import { Tag } from "primereact/tag";
import PolicyRegistationStep from "./components/PolicyRegistationStep";
import ProductSelection from "./components/ProductCard";
import { useCart } from "./context/InsureCartProvider";
// import { useContext } from "react";

export default function Home({}) {
  return (
    <div className="container h-screen">
      Welcome
      {
      /*
      <PolicyRegistationStep />
      <hr />
     
      <hr />
      <ProductSelection /> 
      */
      }
    </div>
    
    
  );
  
}



