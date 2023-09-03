import Link from "next/link";
import copy from "copy-to-clipboard";
import { CopyIcon } from "../../public/assets/icons";
import { LeftArrow } from "../../public/assets/icons";
import BlogHead from "../../components/Blogs/BlogHead";

interface Props {
  frontmatter: {
    title: string;
    date?: string;
    cover_image?: string;
    category?: string[];
    description?: string;
  };
  content: string;
}

const Post = ({ frontmatter, content }: Props) => {

  const codeContent = content.replace(
    /<pre>(.*?)<\/pre>/gs,
    (match, p1) =>
      `<pre class="bg-slate-50 dark:bg-slate-700 overflow-auto">${p1.replace(
        /<code>/gs,
        '<code class="text-green-500">'
      )}</pre>`
  );

  return (
    <div className="bg-white dark:bg-[#0b1324] my-2 md:my-3 mx-2 p-6 md:py-20 md:pb-28 rounded-xl md:mx-6 md:px-48 shadow-xl min-h-screen">
      <article>
        <div className="flex flex-row justify-between">
          <Link href="/blog">
            <a className="relative top-2 left-2 flex flex-row items-center space-x-2 text-lg hover:underline w-min px-2">
              <LeftArrow />
              <span className="">back</span>
            </a>
          </Link>

          <button
            onClick={() => {
              copy(window.location.href);
              alert("Link copied to clipboard");
            }}
            className="text-lg flex flex-row px-2 py-1 mx-1 space-x-2 items-center border-2 border-slate-200 rounded-lg hover:bg-slate-200 dark:border-slate-400 dark:hover:bg-slate-800 hover:shadow-xl transition-all"
          >
            <CopyIcon className="fill-blue-400"/>
            <span>Share</span>
          </button>
        </div>

        <BlogHead frontmatter={frontmatter} />
        <main className="prose-base md:prose-xl md:prose-slate prose-code:overflow-auto prose-code:font-semibold prose-a:underline prose-a:text-blue-600 dark:font-light dark:text-gray-100">
          <div
            dangerouslySetInnerHTML={{
              __html: content
                .replace(
                  /<pre>/g,
                  '<pre class="bg-slate-100 dark:bg-slate-800 overflow-auto shadow-inner dark:text-slate-300">'
                )
                .replace(/<img>/g, '<img class="rounded-xl shadow-xl">'),
            }}
          />
        </main>
      </article>
    </div>
  );
};

export default Post;
