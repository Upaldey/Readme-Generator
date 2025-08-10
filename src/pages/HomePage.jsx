import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
        Create Professional READMEs in Minutes
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Build your project's front door with an intuitive, live-updating editor.
        No more guesswork, just beautifully formatted documentation.
      </p>
      <button
        onClick={() => navigate("/editor")}
        className="mx-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-transform hover:scale-105"
      >
        Start Building for Free →
      </button>
    </div>
  );
};

export default HomePage;
