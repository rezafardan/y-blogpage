import MainCardNewArticle from "@/components/Atomic/NewArticle/MainCardNewArticle";
import CardNewArticle from "@/components/Atomic/NewArticle/CardNewArticle";

export default function NewArticle() {
  return (
    <section className="mb-10">
      {/* BY PUBLISH DATE */}
      <header className="px-2 py-2 border-b font-extrabold text-xl">
        ARTIKEL TERBARU
      </header>

      <section>
        {/* CARD */}
        <MainCardNewArticle
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
        <div className="grid grid-cols-2">
          <CardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <CardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <CardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <CardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
        </div>
      </section>
    </section>
  );
}
