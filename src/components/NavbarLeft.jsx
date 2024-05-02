import React from "react";
import { Link } from 'react-router-dom';

function NavbarLeft() {

  return (
    <div class="bg-gray-100 w-1/6 max-h-full overflow-y-auto">
        <aside class="shadow bg-gray-390 h-screen py-8">
          <h2 class="px-2 shadow bg-green-100 text-lg font-semibold mb-4 w-full">Lesson</h2>
          <ul class="shadow space-y-2">
            <li>
              <Link to="/lesson/01" class="px-2 shadow">Lesson 1</Link>
            </li>
            <li>
              <Link to="/lesson/02" class="px-2 shadow">Lesson 2</Link>
            </li>
            <li>
              <Link to="/lesson/03" class="px-2 shadow">Lesson 3</Link>
            </li>
            <li>
              <Link to="/lesson/04" class="px-2 shadow">Lesson 4</Link>
            </li>
            <li>
              <Link to="/lesson/05" class="px-2 shadow">Lesson 5</Link>
            </li>
          </ul>
        </aside>
    </div>
  );
}

export default NavbarLeft;