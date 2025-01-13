interface CardHighlightArticleProps {
  title?: string;
  date?: Date;
}

export default function CardHighlightArticle({
  title = "Title not found",
  date,
}: CardHighlightArticleProps) {
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
      <div className="flex flex-col justify-between flex-grow h-24">
        <a href="" className="font-bold line-clamp-3">
          {title}
        </a>

        {/* FOOTER */}
        <p className="text-xs">
          {date
            ? date.toLocaleString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Tanggal tidak tersedia"}
        </p>
      </div>
    </div>
  );
}
