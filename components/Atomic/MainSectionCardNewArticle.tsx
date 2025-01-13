interface MainSectionCardNewArticleProps {
  title?: string;
  content?: string;
  author?: string;
  date?: Date;
}

export default function MainSectionCardNewArticle({
  title = "Default Title",
  content = "Default Content",
  author = "Anonymous",
  date,
}: MainSectionCardNewArticleProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 p-2">
      {/* IMAGE */}
      <div className="flex-shrink-0">
        <a href="#">
          <img
            src="/assets/carousel-3.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </a>
      </div>

      <div>
        {/* CONTENT */}
        <div>
          {/* TITLE */}
          <a href="" className="font-bold line-clamp-2">
            {title}
          </a>
        </div>

        <div>
          {/* CONTENT */}
          <a href="#" className="line-clamp-3 text-justify">
            {content}
          </a>

          {/* FOOTER */}
          <div className="flex gap-1 items-center mt-4 text-xs">
            {/* AUTHOR */}
            <p>{author}</p>

            <span>-</span>

            {/* DATE */}
            <p>
              {date
                ? date.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Tanggal tidak tersedia"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
