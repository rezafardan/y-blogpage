import { FaFacebookF } from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

export default function LeftSide() {
  return (
    <section className="flex flex-col gap-4">
      <div className="text-2xl font-bold flex justify-center items-start">
        .Logo Here
      </div>

      <div className="flex justify-center items-start">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-full p-2 border">
            <FaFacebookF />
          </div>
          <div className="rounded-full p-2 border">
            <FaXTwitter />
          </div>
          <div className="rounded-full p-2 border">
            <FaInstagram />
          </div>
          <div className="rounded-full p-2 border">
            <FaTelegram />
          </div>
          <div className="rounded-full p-2 border">
            <FaYoutube />
          </div>
          <div className="rounded-full p-2 border">
            <FaTiktok />
          </div>
        </div>
      </div>
    </section>
  );
}
