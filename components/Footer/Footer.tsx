import BottomSide from "./Content/BottomSide";
import LeftSide from "./Content/LeftSide";
import RightSide from "./Content/RightSide";

export default function Footer() {
  return (
    <footer className="h-auto bg-black text-white px-72 flex flex-col gap-10 py-20">
      <div className="grid grid-cols-2">
        <LeftSide />

        <RightSide />
      </div>

      <BottomSide />
    </footer>
  );
}
