import Image from "next/image";
import Navbar from "./Navbar/Navbar";

import { RiAccountCircleFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-black/25 w-full">
      <section className="flex bg-slate-600 w-full">
        <Image
          src="/assets/logo/logo.png"
          width={250}
          height={120}
          objectFit="zoom"
          alt="Logo"
        />
        <div className="flex gap-2">
          <div>Toggle Dark</div>
          <div className="w-10">
            <RiAccountCircleFill />
          </div>
        </div>
      </section>
      <Navbar></Navbar>
    </header>
  );
}
