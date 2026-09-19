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
        prose-a:text-brand hover:prose-a:text-brand/80 prose-a:no-underline
        prose-strong:text-gray-900 dark:prose-strong:text-white
        prose-blockquote:border-l-brand prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300
        prose-code:text-brand prose-code:bg-brand/10 prose-code:px-1 prose-code:rounded
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
      <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-b from-brand/5 to-transparent -z-10 blur-3xl" />
      <div className="absolute -inset-x-4 bottom-0 h-96 bg-gradient-to-t from-accent/5 to-transparent -z-10 blur-3xl" />

    </div>
  );
}
