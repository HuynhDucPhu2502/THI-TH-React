import { Provider } from "react-redux";
import { store } from "./store";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <main className="flex-grow p-4 max-w-3xl mx-auto space-y-8">
        <StudentForm />
        <StudentList />
      </main>
      <Footer />
    </div>
    </Provider>
  );
}

export default App
