import React from "react";

import {
  Button, Column, Img, Input, Line, List, Row, Stack, Text
} from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const ViewBookingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[29px] pb-[58px] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
          <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start max-w-[280px] sm:mb-[155px] md:mb-[201px] mb-[390px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[12px] sm:p-[15px] p-[24px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
              <Img
                src="/images/img_settings.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                alt="settings"
              />
              <Text
                className="flex-grow ml-[13px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_600"
                as="h1"
                variant="h1"
              >
                Employees
              </Text>
            </Row>
            <Column className="flex flex-col items-center justify-start mb-[3px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:px-[0] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                  <Img
                    src="/images/img_objectscolumn_24X24.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="objectscolumn"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_400"
                    as="h4"
                    variant="h4"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                  <Img
                    src="/images/img_mail.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="mail"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Invitation
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                  <Img
                    src="/images/img_upload.svg"
                    className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="upload"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Employee Directory
                  </Text>
                  <Img
                    src="/images/img_arrowright.svg"
                    className="h-[16px] sm:h-[7px] md:h-[9px] max-w-[100%] ml-[12px] sm:ml-[4px] md:ml-[6px] w-[16px] sm:w-[6px] md:w-[8px]"
                    alt="arrowright"
                  />
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                  <Img
                    src="/images/img_file.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="file"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Documents
                  </Text>
                </Row>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[4px] w-[100%]"
                  name="Frame5934"
                  placeholder="Space Management"
                  prefix={
                    <Img
                      src="/images/img_folder.svg"
                      className="ml-[4px] mr-[10px] sm:mr-[3px] md:mr-[5px] my-[auto]"
                      alt="folder"
                    />
                  }
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillIndigo600"
                ></Input>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                  <Img
                    src="/images/img_trophy.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="trophy"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Training
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                  <Img
                    src="/images/img_search.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="search"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Hiring
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                  <Img
                    src="/images/img_settings_24X24.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="settings One"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Manage Role Position
                  </Text>
                </Row>
              </Column>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                wrapClassName="flex md:mt-[241px] mt-[468px] sm:mt-[186px] w-[100%]"
                name="Logout"
                placeholder="Logout"
                suffix={
                  <Img
                    src="/images/img_question.svg"
                    className="ml-[35px] mr-[2px] sm:ml-[13px] md:ml-[18px] my-[auto]"
                    alt="question"
                  />
                }
                shape="RoundedBorder8"
                size="lg"
                variant="FillGray101"
              ></Input>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1640px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] p-[19px] md:p-[9px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Search
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                  wrapClassName="flex md:ml-[8px] ml-[16px] sm:mx-[0] sm:w-[100%] w-[82%]"
                  name="Group3997"
                  placeholder="Search Employee..."
                  prefix={
                    <Img
                      src="/images/img_search_bluegray_500.svg"
                      className="cursor-pointer ml-[5px] mr-[18px] sm:mr-[7px] sm:ml-[1px] md:mr-[9px] md:ml-[2px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#757e8a"
                        className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[8px] sm:ml-[3px] md:mr-[11px] md:ml-[5px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="mdSrc"
                  variant="srcFillBluegray50"
                ></Input>
              </Row>
              <Img
                src="/images/img_user.svg"
                className="sm:h-[17px] md:h-[22px] h-[42px] mr-[13px] sm:mr-[5px] md:mr-[6px] rounded-radius50 sm:w-[16px] md:w-[21px] w-[42px]"
                alt="user"
              />
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[30px] rounded-radius8 sm:w-[100%] w-[97%]">
              <Text
                className="font-medium sm:mt-[2px] md:mt-[3px] mt-[6px] text-black_901 w-[auto]"
                as="h2"
                variant="h2"
              >
                My Space
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[10px] ml-[20px] sm:mt-[22px] md:mt-[28px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Stack className="backdrop-opacity-[0.5] bg-indigo_700 blur-[16.00px] h-[401px] relative rounded-radius8 sm:w-[100%] w-[49%]">
                  <Img
                    src="/images/img_projecttitle2.png"
                    className="absolute h-[401px] max-w-[100%] rounded-radius8 w-[100%]"
                    alt="projecttitleTwo"
                  />
                </Stack>
                <Column className="flex flex-col sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] rounded-radius4 sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Text
                      className="font-medium mt-[1px] text-gray_801 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Space Name :
                    </Text>
                    <Text
                      className="font-bold mb-[1px] md:ml-[12px] ml-[24px] sm:ml-[9px] text-indigo_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Organization Name
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[2px] sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Text
                      className="font-medium text-gray_801 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Location :
                    </Text>
                    <Text
                      className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] mt-[1px] text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Text
                      className="font-medium mb-[1px] text-gray_801 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Capacity :
                    </Text>
                    <Text
                      className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] mt-[1px] text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      1000 Employee
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[31px] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[91%]">
                    <Text
                      className="font-medium text-gray_801 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Resource :
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[12px] ml-[24px] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[78%]">
                      <Button
                        className="cursor-pointer font-medium min-w-[16%] text-[16px] text-center text-indigo_600 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_2"
                      >
                        Table
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[16%] text-[16px] text-center text-indigo_600 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_2"
                      >
                        Chair
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[18%] text-[16px] text-center text-indigo_600 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_2"
                      >
                        Laptop
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[22%] text-[16px] text-center text-indigo_600 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_2"
                      >
                        Keyboard
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[18%] text-[16px] text-center text-indigo_600 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_2"
                      >
                        Mouse
                      </Button>
                    </Row>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium sm:mt-[2px] md:mt-[3px] mt-[7px] text-gray_801 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Description :
                    </Text>
                    <Text
                      className="font-medium leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:ml-[12px] ml-[24px] sm:mx-[0] text-black_900 sm:w-[100%] w-[80%]"
                      as="h3"
                      variant="h3"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[35%]">
                <Button
                  className="cursor-pointer font-medium min-w-[31%] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder8"
                >
                  Book Space
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[31%] md:ml-[12px] ml-[24px] sm:ml-[9px] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder8"
                >
                  View Booking
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[31%] md:ml-[12px] ml-[24px] sm:ml-[9px] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder8"
                >
                  My Booking
                </Button>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] pt-[1px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Img
                    src="/images/img_objectscolumn.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[1px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="objectscolumn One"
                  />
                  <Text
                    className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-indigo_600"
                    as="h3"
                    variant="h3"
                  >
                    View Booking
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] mt-[16px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[2px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Button
                  className="flex sm:h-[20px] md:h-[25px] h-[48px] items-center justify-center sm:w-[19px] md:w-[24px] w-[48px]"
                  shape="icbRoundedBorder5"
                  size="lgIcn"
                  variant="icbOutlineBluegray5003d"
                >
                  <Img
                    src="/images/img_volume_48X48.svg"
                    className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="volume"
                  />
                </Button>
                <Column className="bg-bluegray_50 flex flex-col items-center md:ml-[12px] ml-[24px] sm:mx-[0] p-[12px] sm:p-[4px] md:p-[6px] rounded-radius8 sm:w-[100%] w-[44%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <Text
                      className="flex-grow font-normal not-italic text-gray_500"
                      as="h4"
                      variant="h4"
                    >
                      --Select one--
                    </Text>
                    <Img
                      src="/images/img_arrowup_bluegray_400.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="arrowup"
                    />
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[12px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Column className="bg-bluegray_50 flex flex-col items-end sm:mx-[0] p-[12px] sm:p-[4px] md:p-[6px] rounded-radius8 sm:w-[100%] w-[48%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[auto] mr-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Text
                        className="flex-grow font-normal not-italic text-gray_500"
                        as="h4"
                        variant="h4"
                      >
                        --From--
                      </Text>
                      <Img
                        src="/images/img_clock.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="clock"
                      />
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_50 flex flex-col items-end sm:mx-[0] p-[12px] sm:p-[4px] md:p-[6px] rounded-radius8 sm:w-[100%] w-[48%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[auto] mr-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Text
                        className="flex-grow font-normal not-italic text-gray_500"
                        as="h4"
                        variant="h4"
                      >
                        --To--
                      </Text>
                      <Img
                        src="/images/img_clock.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="clock One"
                      />
                    </Row>
                  </Column>
                </Row>
              </Row>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start sm:mb-[11px] md:mb-[14px] mb-[28px] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                <Column className="bg-gray_101 border border-gray_300 border-solid flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[8px] sm:mx-[0] sm:pl-[15px] md:pl-[38px] pl-[74px] sm:pr-[0] sm:w-[100%] w-[87%]">
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Text
                          className="flex-grow font-semibold text-indigo_600"
                          as="h4"
                          variant="h4"
                        >
                          Booking Id
                        </Text>
                        <Img
                          src="/images/img_arrowup.svg"
                          className="flex-shrink-0 h-[16px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[16px] sm:w-[6px] md:w-[8px]"
                          alt="arrowup One"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[118px] ml-[229px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[5%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                        <Text
                          className="flex-grow font-semibold mb-[1px] text-indigo_600"
                          as="h4"
                          variant="h4"
                        >
                          Title
                        </Text>
                        <Img
                          src="/images/img_arrowup.svg"
                          className="flex-shrink-0 h-[16px] sm:h-[7px] md:h-[9px] max-w-[100%] mt-[3px] w-[16px] sm:w-[6px] md:w-[8px]"
                          alt="arrowup Two"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[116px] ml-[226px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[5%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="flex-grow font-semibold mt-[1px] text-indigo_600"
                          as="h4"
                          variant="h4"
                        >
                          Date
                        </Text>
                        <Img
                          src="/images/img_arrowup.svg"
                          className="flex-shrink-0 h-[16px] sm:h-[7px] md:h-[9px] max-w-[100%] mb-[1px] w-[16px] sm:w-[6px] md:w-[8px]"
                          alt="arrowup Three"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[128px] ml-[248px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[5%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                        <Text
                          className="flex-grow font-semibold mb-[1px] text-indigo_600"
                          as="h4"
                          variant="h4"
                        >
                          Time
                        </Text>
                        <Img
                          src="/images/img_arrowup.svg"
                          className="flex-shrink-0 h-[16px] sm:h-[7px] md:h-[9px] max-w-[100%] mt-[3px] w-[16px] sm:w-[6px] md:w-[8px]"
                          alt="arrowup Four"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[116px] ml-[225px] sm:mx-[0] sm:px-[0] py-[2px] w-[1%] sm:w-[100%]">
                      <div className="mt-[1px] overflow-x-auto w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Text
                            className="flex-grow font-semibold mt-[1px] text-indigo_600"
                            as="h4"
                            variant="h4"
                          >
                            Members
                          </Text>
                          <Img
                            src="/images/img_arrowup.svg"
                            className="flex-shrink-0 h-[16px] sm:h-[7px] md:h-[9px] max-w-[100%] mb-[1px] w-[16px] sm:w-[6px] md:w-[8px]"
                            alt="arrowup Five"
                          />
                        </Row>
                      </div>
                    </Column>
                  </Row>
                </Column>
                <List
                  className="sm:gap-[13px] md:gap-[18px] gap-[35px] grid min-h-[auto] sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="flex flex-col items-center justify-start pt-[3px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-blue_A400 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        BOOK123
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[209px] sm:ml-[83px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="font-normal ml-[176px] sm:ml-[70px] md:ml-[90px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        12/12/2022
                      </Text>
                      <Text
                        className="font-normal ml-[181px] sm:ml-[72px] md:ml-[93px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        09:00 AM - 06:00 PM
                      </Text>
                      <Text
                        className="font-normal ml-[169px] sm:ml-[67px] md:ml-[87px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100 Members
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]" />
                  </Column>
                  <Column className="flex flex-col items-center justify-start pt-[3px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-blue_A400 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        BOOK123
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[209px] sm:ml-[83px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="font-normal ml-[176px] sm:ml-[70px] md:ml-[90px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        12/12/2022
                      </Text>
                      <Text
                        className="font-normal ml-[181px] sm:ml-[72px] md:ml-[93px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        09:00 AM - 06:00 PM
                      </Text>
                      <Text
                        className="font-normal ml-[169px] sm:ml-[67px] md:ml-[87px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100 Members
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]" />
                  </Column>
                  <Column className="flex flex-col items-center justify-start pt-[3px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-blue_A400 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        BOOK123
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[209px] sm:ml-[83px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="font-normal ml-[176px] sm:ml-[70px] md:ml-[90px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        12/12/2022
                      </Text>
                      <Text
                        className="font-normal ml-[181px] sm:ml-[72px] md:ml-[93px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        09:00 AM - 06:00 PM
                      </Text>
                      <Text
                        className="font-normal ml-[169px] sm:ml-[67px] md:ml-[87px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100 Members
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]" />
                  </Column>
                  <Column className="flex flex-col items-center justify-start pt-[3px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-blue_A400 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        BOOK123
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[209px] sm:ml-[83px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="font-normal ml-[176px] sm:ml-[70px] md:ml-[90px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        12/12/2022
                      </Text>
                      <Text
                        className="font-normal ml-[181px] sm:ml-[72px] md:ml-[93px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        09:00 AM - 06:00 PM
                      </Text>
                      <Text
                        className="font-normal ml-[169px] sm:ml-[67px] md:ml-[87px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100 Members
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]" />
                  </Column>
                  <Column className="flex flex-col items-center justify-start pt-[3px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-blue_A400 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        BOOK123
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[209px] sm:ml-[83px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="font-normal ml-[176px] sm:ml-[70px] md:ml-[90px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        12/12/2022
                      </Text>
                      <Text
                        className="font-normal ml-[181px] sm:ml-[72px] md:ml-[93px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        09:00 AM - 06:00 PM
                      </Text>
                      <Text
                        className="font-normal ml-[169px] sm:ml-[67px] md:ml-[87px] mt-[1px] not-italic text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100 Members
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]" />
                  </Column>
                </List>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ViewBookingPage;
