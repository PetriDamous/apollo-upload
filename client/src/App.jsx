import "./App.css";

function App() {
  const onChange = (event) => {
    const files = event.target.files;

    console.log(files);
  };

  return <input type="file" onChange={onChange} />;
}

export default App;
