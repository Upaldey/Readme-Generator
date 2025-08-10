const RawMarkdownView = ({ markdownText }) => {
    return (
        <pre className="p-6 bg-gray-800 text-white text-sm rounded-b-lg h-full overflow-y-auto whitespace-pre-wrap">
            <code>{markdownText}</code>
        </pre>
    );
};
export default RawMarkdownView;