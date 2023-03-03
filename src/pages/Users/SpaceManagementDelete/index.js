import React from "react";

import { Column, Grid, Img, Input, Line, Row, Stack, Text } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const SpaceManagementDeletePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-gray_100 font-inter h-[1217px] mx-[auto] relative w-[100%]">
        <Row className="absolute bg-white_A700 border border-gray_300 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1640px] sm:p-[15px] p-[19px] md:p-[9px] sm:pl-[15px] sm:pr-[15px] right-[0] top-[0] w-[100%]">
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
        <Column className="absolute bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start left-[0] max-w-[280px] md:p-[12px] sm:p-[15px] p-[24px] sm:pl-[15px] sm:pr-[15px] top-[0] w-[100%]">
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
            <Column className="flex flex-col justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] pb-[10px] sm:pb-[3px] md:pb-[5px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]">
                <Img
                  src="/images/img_save.svg"
                  className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] my-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                  alt="save"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                  as="h4"
                  variant="h4"
                >
                  Home
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
                  alt="search Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-bluegray_500"
                  as="h4"
                  variant="h4"
                >
                  Hiring
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[11px] mt-[22px] sm:mt-[8px] w-[100%]">
                <Img
                  src="/images/img_settings_24X24.svg"
                  className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                  alt="settings One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                  as="h4"
                  variant="h4"
                >
                  Manage Role and Position
                </Text>
              </Row>
            </Column>
            <Input
              className="font-medium p-[0] text-[16px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              wrapClassName="flex md:mt-[268px] mt-[521px] sm:mt-[208px] w-[100%]"
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
        <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[3%] flex flex-col justify-start max-w-[1576px] md:p-[15px] sm:p-[15px] p-[30px] sm:pl-[15px] sm:pr-[15px] right-[2%] rounded-radius8 w-[100%]">
          <Column className="flex flex-col items-center justify-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
            <Text
              className="font-medium text-black_901 w-[auto]"
              as="h2"
              variant="h2"
            >
              My Space
            </Text>
          </Column>
          <Column className="flex flex-col items-center justify-start sm:mb-[21px] md:mb-[27px] mb-[53px] sm:mt-[22px] md:mt-[29px] mt-[57px] sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[98%]">
            <Grid className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group438.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu_24X24.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group438.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu_24X24.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location One"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group438.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu_24X24.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu Two"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location Two"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group438.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu_24X24.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu Three"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location Three"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group438.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu_24X24.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu Four"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location Four"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group438.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu_24X24.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu Five"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location Five"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h4"
                      variant="h4"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Column className="absolute bg-black_900_99 flex flex-col justify-start md:p-[145px] sm:p-[15px] p-[281px] w-[100%]">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[202px] sm:mb-[194px] md:mb-[251px] mb-[487px] md:ml-[172px] ml-[335px] sm:mx-[0] md:p-[12px] sm:p-[15px] p-[24px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 shadow-bs1 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
              <Img
                src="/images/img_eyealt.svg"
                className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                alt="eyealt"
              />
              <Text
                className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_600"
                as="h4"
                variant="h4"
              >
                View Spase
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
              <Img
                src="/images/img_edit_24X24.svg"
                className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                alt="edit"
              />
              <Text
                className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_600"
                as="h4"
                variant="h4"
              >
                Edit Spase
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[12px] mt-[24px] sm:mt-[9px] sm:px-[0] w-[100%]">
              <Img
                src="/images/img_trash.svg"
                className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                alt="trash"
              />
              <Text
                className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_600"
                as="h4"
                variant="h4"
              >
                Remove Space
              </Text>
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default SpaceManagementDeletePage;
