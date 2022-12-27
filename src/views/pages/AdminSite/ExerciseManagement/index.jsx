import React, { useState } from "react";
import Header from "../../../components/Header";
import ExerciseTR from "./exerciseTR";
import PaginationRound from "../../../components/Pagination";

const ExerciseManagement = () => {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-1400">
        <div>
          <p className="text-gray-700 font-bold text-2xl mt-10">
            Exercise Management
          </p>
        </div>
        <div>
          <ExerciseTR />
          <PaginationRound />
        </div>
      </div>
    </div>
  );
};

export default ExerciseManagement;
