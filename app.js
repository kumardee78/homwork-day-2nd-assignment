
function App() {
    return (
        <div className="shadow-xl mx-5 my-5 bg-white">
            <h1 className="text-4xl font-medium bg-[aqua] py-4 px-8">Topics covered</h1>
            <p className="py-4 px-8">The following is a lis od all the topics we cover in the MDN learning area.</p>
            <a href="https://www.w3schools.com/" className="py-4 px-8 text-sky-700 underline">Getting started with the web</a>
            <p className="py-4 px-10">Provides a practical introduction to web development for complete beginners.</p>
            <a href="https://www.w3schools.com/html/default.asp" className="py-4 px-8 text-sky-700 underline">HTML-structure the web</a>
            <p className="py-4  px-10">HTML is the language that we use to structure the different parts of ourt content and define what their meanung or purpose is. This topics teaches HTML im detail.</p>
            <a href="https://www.w3schools.com/css/default.asp" className="py-4 px-8 text-sky-700 underline">CSS-styling the web</a>
            <p className="py-4 px-10">CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides Comprehensive coverage of CSS</p>
        </div>
    )  
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />)