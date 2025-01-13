import RandomArticle from "./RandomArticle/RandomArticle";
import HighlightArticle from "./HighlightArticle/HighlightArticle";
import Carousel from "./Carousel/Carousel";
import NewArticle from "./NewArticle/NewArticle";

export default function Main() {
  return (
    <section className="px-72 flex flex-col">
      <Carousel />

      <main className="flex gap-4 min-w-full">
        <div className="flex flex-col flex-grow">
          <NewArticle />
          <RandomArticle />
        </div>
        <div>
          <HighlightArticle />
        </div>
      </main>
    </section>
  );
}
