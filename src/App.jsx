import Navbar from "./Component/Navbar";
import PlanPicker from "./Component/PlanPicker";
import Waitlist from "./Component/Waitlist";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />
      <PlanPicker />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;