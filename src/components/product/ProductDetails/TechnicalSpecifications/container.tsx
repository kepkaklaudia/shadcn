import React, { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-[260px] grid place-content-center min-w-[250px] mt-[50px] mb-[100px] mx-auto  lg:w-[600px] sm:w-[500px]  ">
    <table className="overflow-y-auto max-w-[800px] w-full relative mx-auto my-0 border-collapse bg-white">
      {children}
    </table>
  </div>
);
