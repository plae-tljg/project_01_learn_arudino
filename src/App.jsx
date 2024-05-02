import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Navbarleft from "./components/NavbarLeft";
import Home from './components/Home';
import Lesson from './components/Lesson';

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div class="flex flex-wrap w-full">
        <Navbarleft />
        <Outlet />
      </div>
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="w-full p-6">
//       <Navbar />
//       <Routes>
//         <Route path="/" exact component={Home} />
//         <Route path="/lesson" component={Lesson} />
//         {/* <Route path="*" component={NotFound} /> */}
//       </Routes>
//     </div>
//   );
// };

export default App;

