import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="app">
      <div bg="white" h="screen" display="flex">
        <div container="~" m="x-auto" display="flex" flex="col">
          <div display="flex" flex="grow col" justify="center" p="b-32">
            <div m="b-10" text="6xl gray-800" font="semibold">
              Header
            </div>
            <div text="gray-800 xl" font="medium">
              Hei you are very welcome here!
            </div>
          </div>
          <div text="center gray-400" font="light" p="y-2">
            Let's dive into the very bottom.
          </div>
        </div>
      </div>
      <div bg="gray-100">
        <div container="~" m="x-auto" p="y-32">
          <div>Here we are, we are in the body</div>
        </div>
      </div>
      <footer p="t-32 b-2" bg="gray-800" text="white">
        <div container="~" m="x-auto">
          The page end here, but the journey still far from an end.
        </div>
      </footer>
    </div>
  );
};

export default App;
