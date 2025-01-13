import Article from "./Article/Article";
import Aside from "./Aside/Aside";
import Carousel from "./Carousel/Carousel";
import Section from "./Section/Section";

export default function Main() {
  return (
    <main className="p-72 flex flex-col">
      <Carousel />

      <div className="flex min-w-full">
        <div className="flex flex-col flex-grow">
          <Section />
          <Article />
        </div>
        <div>
          <Aside />
        </div>
      </div>
    </main>
  );
}
