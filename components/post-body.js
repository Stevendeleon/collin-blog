import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className="w-full p-8 m-auto overflow-auto rounded-lg bg-blogBg">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
