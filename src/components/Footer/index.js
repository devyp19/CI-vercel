import { Column, Img, Row } from "components";
import React from "react";
const Footer = ({ className }) => {
  return (
    <Row
      className={`flex flex-row bg-white sticky bottom-0 border-t-2 border-gray-200 py-3 w-[100%] h-[13%] ${className && className
        }`}
    >
      <Column className="flex flex-column items-center justify-center mx-auto">
        <div className="cursor-pointer" onClick={() => window.open('http://dhiwise.com/?utm_campaign=Community&utm_source=github_project&utm_medium=github&utm_term=react&utm_content=company_intranet')}><Img src="/images/main-beta.svg" className="w-36" alt="" /></div>
        <div className="text-sm font-semibold">
          60% of this application is created using <a className="cursor-pointer hover:underline" target='_blank' style={{ color: "#0d6efd" }} href="http://dhiwise.com/?utm_campaign=Community&utm_source=github_project&utm_medium=github&utm_term=react&utm_content=company_intranet">DhiWise</a>.
        </div>
        <div className="text-sm font-semibold">
          This is just a preview of the app. Access all the features for free on <a href="https://github.com/DhiWise/Company_Intranet" target="_blank" className="hover:underline" style={{ color: "#0d6efd" }}>GitHub</a>.
        </div>
      </Column>
    </Row>
  );
};

export { Footer };
