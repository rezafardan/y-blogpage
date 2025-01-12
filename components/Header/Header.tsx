import Navbar from "./Navbar/Navbar";
import TopHeader from "./TopHeader/TopHeader";

// HEADER CONTAINER WRAPPER
export default function Header() {
  return (
    <header className="w-full border-b bg-black text-white">
      {/* HEADER */}
      <TopHeader></TopHeader>

      {/* NAVBAR */}
      <Navbar></Navbar>
    </header>
  );
}
