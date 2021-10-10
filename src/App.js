import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/configureStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
