"use client";
import { useSelector } from "react-redux";
const Header = () => {
  const { count } = useSelector((state) => state.commonStates);
  console.log("store", count);
  return <div>Hello</div>;
};
export default Header;
