import { Routes, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import UserPage from "./Users";
import Users from "./UserPage";

function AllRoutes() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users" element={<Users />}>
          {/* <Route path=":id" element={<div>Nested Route</div>} /> */}
        </Route>
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

// 1. Create Routes
// 2. Create navbar
// 3. ensure Browser Router is imported
// 4. create home, about, contact
// 5. creaet separate components for it
// 6. if possible start on the users page => where you fetch user data
