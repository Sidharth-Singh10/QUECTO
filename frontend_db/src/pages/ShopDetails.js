// ShopDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import SecNavbar from "../components/sec_navbar/SecNavbar";
// import Product from "../components/product/Product";

const ShopDetails = () => {
  const { slug } = useParams();
  console.log(slug);

  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-user@ec2-3-110-94-120.ap-south-1.compute.amazonaws.com:8080/api/shops/${slug}`
        );
        console.log(response.data);
        setShops(response.data); // Assuming response.data is an array of shop objects
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchData();
  }, []);
  // Fetch shop details using the slug

  return (
    <>
        <Navbar />
        <SecNavbar shopName={shops.shopName} rating={shops.ratings}/>
      <h1>{shops.shopName}</h1>
     {/* <Product /> */}
    </>
  );
};

export default ShopDetails;
