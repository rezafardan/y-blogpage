interface CardHighlightArticleProps {
  title?: string;
  category?: string;
}

export default function CardHighlightArticle({
  title = "Title not found",
  category = "Kategori tidak tersedia",
}: CardHighlightArticleProps) {
  return (
    <div className="flex justify-start items-start gap-2 p-2">
      <div className="w-20 h-20 flex-shrink-0">
        {/* IMAGE */}
        <a href="#">
          <img
            src="/assets/carousel-2.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </a>
      </div>

      {/* CONTENT */}
      <div className="flex gap-2 flex-col justify-start flex-grow h-20 py-1 text-sm">
        <a href="" className="font-bold line-clamp-2">
          {title}
        </a>

        {/* FOOTER */}
        <p className="text-xs">{category}</p>
      </div>
    </div>
  );
}
