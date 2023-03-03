import React from "react";

import {
  Button, Column, Grid, Img, Input, Line, Row, Stack, Text
} from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const DocumentsOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[22px] pb-[44px] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
          <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start max-w-[280px] sm:mb-[133px] md:mb-[172px] mb-[335px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[12px] sm:p-[15px] p-[24px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
            <Column className="flex flex-col items-center justify-start sm:mb-[2px] md:mb-[3px] mb-[6px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:px-[0] w-[100%]">
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
                    src="/images/img_volume.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="volume"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Space Management
                  </Text>
                </Row>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[4px] w-[100%]"
                  name="Frame5933"
                  placeholder="Documents"
                  prefix={
                    <Img
                      src="/images/img_menu.svg"
                      className="ml-[7px] mr-[10px] sm:mr-[3px] sm:ml-[2px] md:mr-[5px] md:ml-[3px] my-[auto]"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="FillIndigo600"
                ></Input>
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                  <Img
                    src="/images/img_location_24X24.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="location"
                  />
                  <Text
                    className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                    as="h4"
                    variant="h4"
                  >
                    Votes
                  </Text>
                </Row>
              </Column>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                wrapClassName="flex md:mt-[211px] mt-[409px] sm:mt-[163px] w-[100%]"
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
            <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:p-[15px] p-[18px] md:p-[9px] rounded-radius8 sm:w-[100%] w-[97%]">
              <Column className="flex flex-col items-center justify-start mb-[122px] sm:mb-[48px] md:mb-[62px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Stack className="h-[436px] relative w-[33%]">
                    <Column className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[0] sm:w-[100%] w-[96%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="/images/img_arrowup_bluegray_400.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] sm:ml-[123px] md:ml-[158px] ml-[308px] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="arrowup"
                        />
                        <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[59px] sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 w-[100%]">
                          <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                            <Img
                              src="/images/img_folder_white_A700.png"
                              className="max-w-[100%] w-[100%]"
                              alt="Folder"
                            />
                            <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="font-medium text-black_900 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                Demo
                              </Text>
                              <Text
                                className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                4 Items
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="absolute flex flex-col items-end justify-start left-[0] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[77%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between rounded-radius4 w-[100%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Sort By
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                          wrapClassName="sm:mx-[0] sm:w-[100%] w-[82%]"
                          name="Group3997 One"
                          placeholder="--Select one--"
                          shape="RoundedBorder4"
                          size="sm"
                        ></Input>
                      </Row>
                      <Column className="bg-gray_102 flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] p-[13px] sm:p-[5px] md:p-[6px] rounded-radius4 shadow-bs1 sm:w-[100%] w-[81%]">
                        <Column className="flex flex-col items-center justify-start ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            --Select one--
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start ml-[2px] sm:mt-[13px] md:mt-[17px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (A-Z)
                          </Text>
                          <Line className="bg-gray_301 h-[1px] md:mt-[10px] mt-[21px] sm:mt-[8px] w-[100%]" />
                        </Column>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                          wrapClassName="md:mt-[9px] ml-[2px] mt-[19px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[98%]"
                          name="Group496"
                          placeholder="(Z-A)"
                          size="4xl"
                          variant="UnderLineGray301"
                        ></Input>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                          wrapClassName="md:mt-[9px] ml-[2px] mt-[19px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[98%]"
                          name="Group498"
                          placeholder="Newest"
                          size="4xl"
                          variant="UnderLineGray301"
                        ></Input>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                          wrapClassName="md:mt-[9px] ml-[2px] mt-[19px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[98%]"
                          name="Group500"
                          placeholder="Oldest"
                          size="4xl"
                          variant="UnderLineGray301"
                        ></Input>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                          wrapClassName="md:mt-[9px] ml-[2px] mt-[19px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[98%]"
                          type="text"
                          name="Group502"
                          placeholder="Name Wise"
                          size="4xl"
                          variant="UnderLineGray301"
                        ></Input>
                        <Text
                          className="font-normal mb-[15px] sm:mb-[5px] md:mb-[7px] ml-[2px] mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date Wise
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start mb-[13px] sm:mb-[5px] md:mb-[6px] sm:mt-[36px] md:mt-[47px] mt-[92px] sm:mx-[0] sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                      <Img
                        src="/images/img_folder_white_A700.png"
                        className="max-w-[100%] w-[100%]"
                        alt="Folder One"
                      />
                      <Text
                        className="font-medium md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Employee
                      </Text>
                      <Text
                        className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        2 Items
                      </Text>
                    </Column>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                    <Button
                      className="flex items-center justify-center md:ml-[186px] min-w-[27%] ml-[361px] sm:ml-[144px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="/images/img_download.svg"
                          className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                          alt="download"
                        />
                      }
                      shape="RoundedBorder8"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Download
                      </div>
                    </Button>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start md:mr-[10px] mr-[20px] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[96%]">
                      <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="/images/img_folder_white_A700.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Folder Two"
                        />
                        <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Demo
                          </Text>
                          <Text
                            className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            4 Items
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Column className="flex flex-col items-center justify-start mt-[17px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Grid className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="/images/img_folder_white_A700.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Folder Three"
                        />
                        <Text
                          className="font-medium md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Employee
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          2 Items
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="/images/img_folder_white_A700.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Folder Four"
                        />
                        <Text
                          className="font-medium md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Employee
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          2 Items
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="/images/img_folder_white_A700.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Folder Five"
                        />
                        <Text
                          className="font-medium md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Employee
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          2 Items
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="/images/img_folder_white_A700.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Folder Six"
                        />
                        <Text
                          className="font-medium md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Employee
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          2 Items
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[31px] p-[61px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="/images/img_folder_white_A700.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Folder Seven"
                        />
                        <Text
                          className="font-medium md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Employee
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_501 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          2 Items
                        </Text>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DocumentsOnePage;
