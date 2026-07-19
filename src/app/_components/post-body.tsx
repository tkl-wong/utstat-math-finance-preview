import Markdown from "react-markdown";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
        prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-primary hover:prose-a:text-primary-focus prose-a:no-underline
        prose-strong:text-gray-900 dark:prose-strong:text-white
        prose-blockquote:border-l-primary prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded
        prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
        prose-img:rounded-xl prose-img:shadow-lg
        prose-hr:border-gray-200 dark:prose-hr:border-gray-800
        prose-ul:list-disc prose-ul:pl-6
        prose-ol:list-decimal prose-ol:pl-6
        prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:leading-relaxed
      ">
        <Markdown>{content}</Markdown>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl" />
      <div className="absolute -inset-x-4 bottom-0 h-96 bg-gradient-to-t from-secondary/5 to-transparent -z-10 blur-3xl" />

      {/* Share Buttons */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
          Share this article
        </h4>
        <div className="flex gap-4">
          <button className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </button>
          <button className="p-2 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
