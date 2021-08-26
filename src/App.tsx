import type { Component } from "solid-js";

import Box from "components/Box";
import { RouteHOC } from "router";
import VStack from "components/VStack";
import "virtual:windi.css";

const App: Component<any> = RouteHOC(() => {
  return (
    <Box>
      <Box bg="white" h="screen" display="flex">
        <Box container="~" m="x-auto" display="flex" flex="col">
          <VStack flex="grow">
            <Box m="b-10" text="6xl gray-800" font="semibold">
              Header
            </Box>
            <Box text="gray-800 xl" font="medium">
              Hei you are very welcome here!
            </Box>
          </VStack>
          <Box text="center gray-400" font="light" p="y-2">
            Let's dive into the very bottom.
          </Box>
        </Box>
      </Box>
      <Box bg="gray-100">
        <Box container="~" m="x-auto" p="y-32">
          <Box>Here we are, we are in the body</Box>
        </Box>
      </Box>
      <Box p="t-32 b-2" bg="gray-800" text="white">
        <Box container="~" m="x-auto">
          The page end here, but the journey still far from an end.
        </Box>
      </Box>
    </Box>
  );
});

export default App;
