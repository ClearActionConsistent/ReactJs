import React from "react";
import { NavLink } from "react-router-dom";
import SportIcon from "../Icons/sport-icon";
import GroupIcon from "../Icons/group-icon";
import './style.css'
import DashboardIcon from "../Icons/dashboard-icon";

const LeftSideBar = () => {
  const activeClassname =
    "border-l-2 border-ct4-dark-green bg-ct4-gray-2 h-10 flex justify-start items-center cursor-pointer font-barlow-medium text-ct4-dark-green uppercase";
  const unactiveClassname =
    "h-10 flex justify-start items-center cursor-pointer font-barlow text-ct4-gray-3 uppercase";

  const pathname = window.location.pathname;

  return (
    <div className="w-60 h-screen border-r border-ct4-border-gray">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => isActive ? activeClassname : unactiveClassname}
      >
        <div className="flex ml-4">
          <DashboardIcon stroke={(pathname == '/dashboard') ? '#457900' : '#888888'} />
          <p className="ml-2 text-sm">Dashboard</p>
        </div>
      </NavLink>
      <NavLink
        to="/sport-management"
        className={({ isActive }) => isActive ? activeClassname : unactiveClassname}
      >
        <div className="flex ml-4">
          <SportIcon stroke={(pathname == '/sport-management') ? '#457900' : '#888888'} />
          <p className="ml-2 text-sm">Sports</p>
        </div>
      </NavLink>
      <NavLink
        to="/group-management"
        className={({ isActive }) => isActive ? activeClassname : unactiveClassname}
      >
        <div className="flex ml-4">
          <GroupIcon stroke={(pathname == '/group-management') ? '#457900' : '#888888'} />
          <p className="ml-2 text-sm">Groups</p>
        </div>
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
