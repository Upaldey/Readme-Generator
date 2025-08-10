import { Link } from "react-router-dom";
import { useState } from "react";
import useReadmeStore from "../../store/readmeStore";
import { useLocation } from "react-router-dom";
const Header = () => {
  const sections = useReadmeStore((state) => state.sections);
  const resetSections = useReadmeStore((state) => state.resetSections);
  const [copyText, setCopyText] = useState("Copy");
  const location = useLocation();

  const handleDownload = () => {
    const fullMarkdown = sections
      .map((section) => section.content)
      .join("\n\n");
    const blob = new Blob([fullMarkdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "README.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const fullMarkdown = sections
      .map((section) => section.content)
      .join("\n\n");
    navigator.clipboard.writeText(fullMarkdown).then(() => {
      setCopyText("Copied!");
      setTimeout(() => setCopyText("Copy"), 2000);
    });
  };

  const handleReset = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to reset? This will delete your current progress."
    );
    if (isConfirmed) {
      resetSections();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
          >
            Readify
          </Link>
          <div className="flex items-center space-x-2">
            <Link
              to="/editor"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Editor
            </Link>
            {location.pathname === "/editor" && (
              <>
                <button
                  onClick={handleCopy}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors w-20"
                >
                  {copyText}
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Download .md
                </button>
                <button
                  onClick={handleReset}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
