import Image from "next/image";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdModeNight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// TOP HEADER
export default function TopHeader() {
  return (
    <section className="flex w-full justify-between items-center border-b px-72 h-16">
      {/* <Image
          src="/assets/logo/logo.png"
          width={250}
          height={120}
          objectFit="zoom"
          alt="Logo"
        /> */}

      {/* LOGO */}
      <div className="text-2xl font-bold">.Logo Here</div>

      {/* MENU */}
      <div className="flex gap-2">
        <div className="flex gap-2">
          <MdModeNight />
          <MdLightMode />
        </div>
        <div className="w-10">
          <RiAccountCircleFill />
        </div>
      </div>
    </section>
  );
}
