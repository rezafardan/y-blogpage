import MainSectionCardNewArticle from "@/components/Atomic/MainSectionCardNewArticle";
import SectionCardNewArticle from "@/components/Atomic/SectionCardNewArticle";

export default function Section() {
  return (
    <section>
      <header className="px-2 py-2 border-b font-extrabold text-xl">
        ARTIKEL TERBARU (URUT BY PUBLISH DATE)
      </header>

      <section>
        {/* CARD */}
        <MainSectionCardNewArticle
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
          <SectionCardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <SectionCardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <SectionCardNewArticle
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere sed? Deserunt ex cupiditate sequi officiis in iusto
            perspiciatis qui voluptate quibusdam ut, possimus sit reiciendis
            obcaecati laudantium molestias eveniet!"
          />
          <SectionCardNewArticle
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
