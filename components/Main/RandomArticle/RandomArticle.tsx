import CardRandomtArticle from "@/components/Atomic/RandomArticle/CardRandomArticle";
import MainCardRandomArticle from "@/components/Atomic/RandomArticle/MainCardRandomArticle";

export default function RandomArticle() {
  return (
    <section className="mb-10">
      <header className="px-2 py-2 border-b font-extrabold text-xl">
        ARTIKEL RANDOM
      </header>

      <section className="grid grid-cols-2">
        <div>
          <MainCardRandomArticle
            author="Reza Fardan"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <MainCardRandomArticle
            author="Reza Fardan"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
        </div>
        <div className="grid grid-cols-1">
          <CardRandomtArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <CardRandomtArticle
            title="Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis"
          />
          <CardRandomtArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <CardRandomtArticle
            title="Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis"
          />
          <CardRandomtArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <CardRandomtArticle
            title="Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis"
          />
        </div>
      </section>
    </section>
  );
}
