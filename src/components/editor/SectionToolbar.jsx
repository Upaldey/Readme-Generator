const SectionToolbar = ({ sectionIndex, onMove, onRemove }) => {
    return (
        <div className="flex items-center space-x-2">
            <button onClick={() => onMove(sectionIndex, -1)} className="p-1 text-gray-500 hover:text-gray-900" title="Move Up">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <button onClick={() => onMove(sectionIndex, 1)} className="p-1 text-gray-500 hover:text-gray-900" title="Move Down">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <button onClick={onRemove} className="p-1 text-red-500 hover:text-red-700" title="Remove Section">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
        </div>
    );
};
export default SectionToolbar