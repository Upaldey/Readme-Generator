import useReadmeStore from "../../store/readmeStore";
import MarkdownPreview from "./MarkdownPreview";
import RawMarkdownView from "./RawMarkdownView";
import { useState } from "react";

const PreviewPanel = () => {
  const sections = useReadmeStore((state) => state.sections);
  const [viewMode, setViewMode] = useState("preview"); 
  const fullMarkdown = sections.map((section) => section.content).join("\n\n");

  const getButtonClass = (mode) =>
    `px-4 py-2 text-sm font-medium rounded-t-lg ${
      viewMode === mode
        ? "bg-white border-b-0 text-blue-600"
        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
    }`;

  return (
    <div className="bg-gray-50 h-full flex flex-col rounded-lg shadow-inner lg:col-span-2">
      <div className="p-4 border-b bg-white rounded-t-lg sticky top-0 z-10 flex items-end justify-between">
        <h2 className="text-lg font-semibold text-gray-700">Preview</h2>
        <div className="border-b">
          <button
            onClick={() => setViewMode("preview")}
            className={getButtonClass("preview")}
          >
            Preview
          </button>
          <button
            onClick={() => setViewMode("raw")}
            className={getButtonClass("raw")}
          >
            Raw
          </button>
        </div>
      </div>
      {viewMode === "preview" ? (
        <MarkdownPreview markdownText={fullMarkdown} />
      ) : (
        <RawMarkdownView markdownText={fullMarkdown} />
      )}
    </div>
  );
};

export default PreviewPanel;
