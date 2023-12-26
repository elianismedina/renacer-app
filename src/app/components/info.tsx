"use client";

import type { Project } from "../../../types";

interface InfoProps {
  data: Project;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <p className="mt-1 text-sm text-gray-500">{data.description}</p>
      <p className="mt-1 text-sm text-gray-500">{data.location}</p>
    </div>
  );
};

export default Info;
