import { Provider } from "react-redux";
import { store } from "./store";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";



function App() {
  return (
    <Provider store={store}>
      <StudentForm/>
      <StudentList/>
    </Provider>
  );
}

export default App
