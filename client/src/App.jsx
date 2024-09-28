import { useQuery } from "@apollo/client";
import { GET_ALL_FILES } from "./graphql";
import "./App.css";

function App() {
  const { data, error, loading } = useQuery(GET_ALL_FILES);

  console.log({ data, error, loading });

  const onChange = (event) => {
    const files = event.target.files;

    console.log(files);
  };

  return <input type="file" onChange={onChange} />;
}

export default App;
