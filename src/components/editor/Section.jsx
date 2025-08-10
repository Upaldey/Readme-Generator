import useReadmeStore from "../../store/readmeStore";
import SectionToolbar from "./SectionToolbar";

const Section = ({ section, index }) => {
  const { updateSectionContent, moveSection, removeSection } = useReadmeStore();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{section.title}</h3>
        <SectionToolbar
          sectionIndex={index}
          onMove={moveSection}
          onRemove={() => removeSection(section.id)}
        />
      </div>
      <textarea
        value={section.content}
        onChange={(e) => updateSectionContent(section.id, e.target.value)}
        className="w-full h-32 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        placeholder={`Enter content for ${section.title}...`}
      />
    </div>
  );
};

export default Section;
