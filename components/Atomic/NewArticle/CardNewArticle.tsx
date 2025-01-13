interface SectionCardNewArticleProps {
  title?: string;
  category?: string;
}

export default function CardNewArticle({
  title = "Title not found",
  category = "Kategori tidak tersedia",
}: SectionCardNewArticleProps) {
  return (
    <div className="flex justify-start items-start gap-2 p-2">
      <div className="w-36 h-24 flex-shrink-0">
        {/* IMAGE */}
        <a href="#">
          <img
            src="/assets/carousel-1.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </a>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-grow h-24 py-1">
        <a href="" className="font-bold line-clamp-3">
          {title}
        </a>

        {/* FOOTER */}
        <p className="text-xs">{category}</p>
      </div>
    </div>
  );
}
