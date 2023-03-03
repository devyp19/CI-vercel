import { Column, Img, Row } from "components";
import React from "react";
const Footer = ({ className }) => {
  return (
    <Row
      className={`flex flex-row bg-white sticky bottom-0 border-t-2 border-gray-200 py-3 w-[100%] h-[13%] ${className && className
        }`}
    >
      <Column className="flex flex-column items-center justify-center mx-auto">
        <Img src="/images/main-beta.svg" className="w-36" alt="" />
        <div className="text-sm font-semibold">
          60% of this application is created using DhiWise.
        </div>
        <div className="text-sm font-semibold">
          This is just a preview of the app. Access all the features for free on <a href="www.demo.com" target="_blank" className="hover:underline" style={{ color: "#0d6efd" }}>GitHub</a>.
        </div>
      </Column>
    </Row>
  );
};

export { Footer };
