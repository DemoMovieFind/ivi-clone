import React from "react";
import { MemoryRouter } from "react-router-dom";

const RouterWrapper = (component:JSX.Element) => <MemoryRouter>{component}</MemoryRouter>

export default RouterWrapper;