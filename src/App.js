import React, { useState, useEffect } from "react";
import Spinner from "./components/Spiner/index.js";
import * as API from "./services/fetch";
import "./App.css";

const App = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <div className="App">
      <section>
        <ul>
          {launches.length === 0 ? (
            <Spinner />
          ) : (
            launches.map((launche) => (
              <div className="bg-stone-100 rounded-xl m-10 text-stone shadow-sm mx-auto overflow-hidden  md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:shrink-0 bg-stone-200 p-5">
                    <img src={launche.links.mission_patch_small} alt="" />
                  </div>
                  <div class="p-8 text-left">
                    <div
                      class={`${
                        launche.launch_success
                          ? "text-teal-400"
                          : "text-red-500"
                      } font-semibold uppercase`  }
                    >
                      {launche.launch_success ? "Completado" : "Fallido"}
                    </div>
                    <a
                      href="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black  hover:underline"
                    >
                      {launche.mission_name}
                    </a>
                    <p class="mt-2 text-slate-500">{launche.details}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default App;
