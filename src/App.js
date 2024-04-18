import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Actions from "./components/Actions";
import Container from "./components/Container";
import Display from "./components/Display";
import Header from "./components/Header";
import HideDisplay from "./components/HideDisplay";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <HideDisplay /> : <Display />}

          <Actions />
        </div>
      </Container>
    </center>
  );
}

export default App;
