import ReactMarkdown from "react-markdown";
const MarkdownPreview = ({ markdownText }) => {
  const components = {
    h1: ({ node, ...props }) => (
      <h1 className="text-3xl font-bold border-b pb-2 mb-4" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl font-semibold border-b pb-2 mb-3" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="mb-4 text-base leading-relaxed" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc pl-5 mb-4" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal pl-5 mb-4" {...props} />
    ),
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline ? (
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code className={`language-${match ? match[1] : ""}`} {...props}>
            {String(children).replace(/\n$/, "")}
          </code>
        </pre>
      ) : (
        <code
          className="bg-gray-200 text-red-600 font-mono text-sm px-1 py-0.5 rounded-md"
          {...props}
        >
          {children}
        </code>
      );
    },
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4"
        {...props}
      />
    ),
    table: ({ node, ...props }) => (
      <table
        className="w-full border-collapse border border-gray-300 mb-4"
        {...props}
      />
    ),
    thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
    tbody: ({ node, ...props }) => <tbody {...props} />,
    tr: ({ node, ...props }) => (
      <tr className="border-b border-gray-200" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th
        className="p-2 border-r border-gray-300 text-left font-semibold"
        {...props}
      />
    ),
    td: ({ node, ...props }) => (
      <td className="p-2 border-r border-gray-300" {...props} />
    ),
  };

  return (
    <div className="p-6 bg-white rounded-b-lg h-full overflow-y-auto">
      <ReactMarkdown components={components}>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
