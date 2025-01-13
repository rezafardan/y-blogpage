import Article from "./Article/Article";
import Aside from "./Aside/Aside";
import Carousel from "./Carousel/Carousel";
import Section from "./Section/Section";

export default function Main() {
  return (
    <section className="px-72 flex flex-col">
      <Carousel />

      <main className="flex gap-4 min-w-full">
        <div className="flex flex-col flex-grow">
          <Section />
          <Article />
        </div>
        <div>
          <Aside />
        </div>
      </main>
    </section>
  );
}
