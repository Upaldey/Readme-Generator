import useReadmeStore from "../../store/readmeStore";
import ALL_SECTIONS from "../../data/availableSections.js";
import { useState } from "react";

const AddSectionPanel = () => {
  const { sections: activeSections, addSection } = useReadmeStore();
  const [searchTerm, setSearchTerm] = useState("");
  const activeSectionIds = new Set(activeSections.map((s) => s.id));

  const availableSections = ALL_SECTIONS.filter((s) => {
    const isNotActive = !activeSectionIds.has(s.id);
    const matchesSearch = s.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return isNotActive && matchesSearch;
  });

  return (
    <div className="bg-gray-50 h-full flex flex-col rounded-lg shadow-inner">
      <div className="p-4 border-b bg-white sticky top-0 z-10 rounded-t-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Add Sections
        </h2>
        <input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>
      <div className="p-4 space-y-2 overflow-y-auto">
        {availableSections.length > 0 ? (
          availableSections.map((section) => (
            <div
              key={section.id}
              className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
            >
              <span className="font-medium text-gray-700">{section.title}</span>
              <button
                onClick={() => addSection(section)}
                className="p-1 text-green-500 hover:text-green-700"
                title="Add Section"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 p-4">No sections found.</p>
        )}
      </div>
    </div>
  );
};

export default AddSectionPanel;
