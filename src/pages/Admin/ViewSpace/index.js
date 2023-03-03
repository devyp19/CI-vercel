import React from "react";

import { Button, Column, Img, Line, List, Row, Stack, Text } from "components";

const ViewSpacePage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
          <aside className="md:hidden sm:hidden w-[15%]">
            <div className="">
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start md:p-[12px] sm:p-[15px] p-[24px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[168px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Img
                    src="/images/img_settings.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="settings"
                  />
                  <Text
                    className="flex-grow font-normal ml-[13px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_600"
                    as="h2"
                    variant="h2"
                  >
                    Employees
                  </Text>
                </Row>
                <Column className="flex flex-col items-center justify-start max-w-[232px] mb-[3px] ml-[auto] mr-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                      <Img
                        src="/images/img_objectscolumn_24X24.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="objectscolumn"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_401"
                        as="h5"
                        variant="h5"
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
                        as="h5"
                        variant="h5"
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
                        as="h5"
                        variant="h5"
                      >
                        Employee Directory
                      </Text>
                      <Img
                        src="/images/img_arrowright_bluegray_500.svg"
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
                        as="h5"
                        variant="h5"
                      >
                        Documents
                      </Text>
                    </Row>
                    <Row className="bg-indigo_600 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                      <Img
                        src="/images/img_folder.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="folder"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-white_A700"
                        as="h5"
                        variant="h5"
                      >
                        Space Management
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
                        as="h5"
                        variant="h5"
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
                        as="h5"
                        variant="h5"
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
                        as="h5"
                        variant="h5"
                      >
                        Manage Role Position
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                      <Img
                        src="/images/img_settings_1.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="settings Two"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                        as="h5"
                        variant="h5"
                      >
                        Tool Settings
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                      <Img
                        src="/images/img_clock.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="clock"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                        as="h5"
                        variant="h5"
                      >
                        Data Settings
                      </Text>
                    </Row>
                  </Column>
                  <Row className="bg-gray_101 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[142px] md:mt-[183px] mt-[356px] p-[10px] sm:p-[3px] md:p-[5px] rounded-radius8 w-[100%]">
                    <Text
                      className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[6px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      Logout
                    </Text>
                    <Img
                      src="/images/img_question.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="question"
                    />
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Column className="flex flex-col items-center justify-start max-w-[1640px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[11px] sm:p-[15px] p-[22px] w-[100%]">
              <Text
                className="font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-black_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Manage your Space
              </Text>
              <Text
                className="bg-deep_orange_A200 flex font-bold items-center mr-[10px] sm:mr-[3px] md:mr-[5px] px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[36px]"
                variant="body2"
              >
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-end justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:p-[15px] p-[18px] md:p-[9px] rounded-radius8 sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mr-[14px] md:mr-[7px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[99%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  My Space
                </Text>
                <Button
                  className="flex items-center justify-center min-w-[11%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="/images/img_plus.svg"
                      className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                      alt="plus"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                    Create Space
                  </div>
                </Button>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[19px] md:mt-[25px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <Stack className="backdrop-opacity-[0.5] bg-indigo_700 blur-[16.00px] h-[401px] relative rounded-radius8 sm:w-[100%] w-[49%]">
                  <Img
                    src="/images/img_projecttitle2.png"
                    className="absolute h-[401px] max-w-[100%] rounded-radius8 w-[100%]"
                    alt="projecttitleTwo"
                  />
                </Stack>
                <List
                  className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid min-h-[auto] sm:pt-[2px] md:pt-[3px] pt-[7px] rounded-radius4 sm:w-[100%] w-[49%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Text
                      className="font-medium mt-[1px] text-gray_801 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Space Name :
                    </Text>
                    <Text
                      className="font-bold mb-[1px] md:ml-[12px] ml-[24px] sm:ml-[9px] text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Organization Name
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Text
                      className="font-medium text-gray_801 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Location :
                    </Text>
                    <Text
                      className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] mt-[1px] text-black_901 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Text
                      className="font-medium mb-[1px] text-gray_801 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Capacity :
                    </Text>
                    <Text
                      className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] mt-[1px] text-black_901 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      1000 Employee
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[91%]">
                    <Text
                      className="font-medium text-gray_801 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Resource :
                    </Text>
                    <List
                      className="gap-[16px] sm:gap-[6px] md:gap-[8px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-5 min-h-[auto] md:ml-[12px] ml-[24px] sm:ml-[9px] rounded-radius4 sm:w-[100%] w-[78%]"
                      orientation="horizontal"
                    >
                      <Button
                        className="cursor-pointer font-medium min-w-[16%] text-[16px] text-center text-indigo_600 w-[100%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_1"
                      >
                        Table
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[16%] text-[16px] text-center text-indigo_600 w-[100%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_1"
                      >
                        Chair
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[18%] text-[16px] text-center text-indigo_600 w-[100%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_1"
                      >
                        Laptop
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[22%] text-[16px] text-center text-indigo_600 w-[100%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_1"
                      >
                        Keyboard
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[18%] text-[16px] text-center text-indigo_600 w-[100%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigo600_1"
                      >
                        Mouse
                      </Button>
                    </List>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium sm:mt-[2px] md:mt-[3px] mt-[7px] text-gray_801 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Description :
                    </Text>
                    <Text
                      className="font-medium leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:ml-[12px] ml-[24px] sm:mx-[0] text-black_901 sm:w-[100%] w-[80%]"
                      as="h4"
                      variant="h4"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Text>
                  </Row>
                </List>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[12px] md:mb-[16px] mb-[32px] ml-[auto] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[35%]">
                <Button className="cursor-pointer font-medium min-w-[31%] text-[16px] text-center text-white_A700 w-[max-content]">
                  Book Space
                </Button>
                <Button className="cursor-pointer font-medium min-w-[31%] md:ml-[12px] ml-[24px] sm:ml-[9px] text-[16px] text-center text-white_A700 w-[max-content]">
                  View Booking
                </Button>
                <Button className="cursor-pointer font-medium min-w-[31%] md:ml-[12px] ml-[24px] sm:ml-[9px] text-[16px] text-center text-white_A700 w-[max-content]">
                  My Booking
                </Button>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ViewSpacePage;
