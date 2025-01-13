interface MainCardRandomArticleProps {
  title?: string;
  content?: string;
  category?: string;
  author?: string;
}

export default function MainCardRandomArticle({
  title = "Default Title",
  content = "Default Content",
  category = "Kategori tidak tersedia",
  author = "Anonymous",
}: MainCardRandomArticleProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 p-2">
      {/* IMAGE */}
      <div className="flex-shrink-0">
        <a href="#">
          <img
            src="/assets/carousel-2.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </a>
      </div>

      <div>
        {/* CONTENT */}
        <div>
          {/* TITLE */}
          <a href="" className="font-bold line-clamp-1">
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
            {/* DATE */}
            <p>{category}</p>

            <span>-</span>

            {/* AUTHOR */}
            <p>{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
