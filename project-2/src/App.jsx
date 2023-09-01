import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main className="main_container">
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
