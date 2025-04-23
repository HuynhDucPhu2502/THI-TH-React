import { Provider } from "react-redux";
import { store } from "./store";
import StudentList from "./components/StudentList";



function App() {
  return (
    <Provider store={store}>
      <StudentList/>
    </Provider>
  );
}

export default App
