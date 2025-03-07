import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./redirect.css";

export default function Redirect() {
  return (
      <Outlet />
  );
}
