import EditorPanel from "../components/editor/EditorPanel";
import PreviewPanel from "../components/preview/PreviewPanel";
import AddSectionPanel from "../components/editor/AddSectionMenu";
const EditorPage = () => {
  return (
    <main className="flex-grow grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 bg-gray-100 h-[calc(100vh-64px)]">
      <AddSectionPanel />
      <EditorPanel />
      <PreviewPanel />
    </main>
  );
};

export default EditorPage;
