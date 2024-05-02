import React from "react";

function navBar_left() {
  return (
    <div className="bg-gray-100">
        <aside className="bg-gray-200 h-screen w-1/3 px-4 py-8">
          <h2 className="text-lg font-semibold mb-4">Left Panel</h2>
          <ul className="space-y-2">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </aside>
    </div>
  );
}

export default navBar_left;