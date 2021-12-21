import React from "react";
import { ProgramList } from "./components/ProgramList";
import { TrackProvider } from "./providers/TrackProvider";
import "./App.css";

export const App = () => {

  return (
    <TrackProvider>
      <ProgramList>

      </ProgramList>
    </TrackProvider>
  );
};
