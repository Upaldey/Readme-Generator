import useReadmeStore from "../../store/readmeStore";
import Section from "./Section";

const EditorPanel = () => {
  const sections = useReadmeStore((state) => state.sections);

  return (
    <div className="bg-gray-50 h-full flex flex-col rounded-lg shadow-inner lg:col-span-2">
      <div className="p-4 border-b bg-white sticky top-0 z-10 rounded-t-lg">
        <h2 className="text-lg font-semibold text-gray-700">Editor</h2>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto">
        {sections.map((section, index) => (
          <Section key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EditorPanel;
