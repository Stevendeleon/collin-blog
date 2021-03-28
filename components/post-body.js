import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl p-8 mx-auto bg-gray-800 rounded-lg md:max-w-4xl lg:max-w-6xl">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
