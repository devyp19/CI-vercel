import React from "react";

import {
  Button, Column,
  Img, Input, Line, List, Row, Stack, Text, TextArea
} from "components";
import Sidebar3 from "components/Sidebar3";

const EditSpacePage = () => {
  return (
    <>
      <Stack className="bg-gray_100 font-inter h-[1217px] mx-[auto] relative w-[100%]">
        <Row className="absolute bg-white_A700 border border-gray_300 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1640px] md:p-[11px] sm:p-[15px] p-[22px] sm:pl-[15px] sm:pr-[15px] right-[0] top-[0] w-[100%]">
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
        <Sidebar3 className="absolute md:hidden sm:hidden left-[0] top-[0] w-[15%]" />
        <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[3%] flex flex-col items-center justify-start max-w-[1576px] sm:p-[15px] p-[18px] md:p-[9px] sm:pl-[15px] sm:pr-[15px] right-[2%] rounded-radius8 w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[99%]">
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
          <List
            className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid sm:mb-[26px] md:mb-[34px] mb-[66px] min-h-[auto] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:w-[100%] w-[96%]"
            orientation="vertical"
          >
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[3px] md:p-[4px] p-[8px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu"
                      />
                      <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mb-[13px] md:mb-[17px] mb-[34px] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] md:p-[12px] sm:p-[15px] p-[24px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[48%]">
                        <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                            <Img
                              src="/images/img_eyealt.svg"
                              className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                              alt="eyealt"
                            />
                            <Text
                              className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_600"
                              as="h5"
                              variant="h5"
                            >
                              View Spase
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                            <Img
                              src="/images/img_edit.svg"
                              className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                              alt="edit"
                            />
                            <Text
                              className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_600"
                              as="h5"
                              variant="h5"
                            >
                              Edit Spase
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                            <Img
                              src="/images/img_trash.svg"
                              className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                              alt="trash"
                            />
                            <Text
                              className="flex-grow font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_600"
                              as="h5"
                              variant="h5"
                            >
                              Remove Space
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location One"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu Two"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location Two"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location One"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu One One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location One One"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[250px] sm:p-[3px] md:p-[4px] p-[8px] relative rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('/images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="/images/img_overflowmenu.svg"
                        className="absolute h-[24px] max-w-[100%] right-[3%] top-[3%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="overflowmenu Two One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Img
                      src="/images/img_location_24X24.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="location Two One"
                    />
                    <Text
                      className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-bluegray_500"
                      as="h5"
                      variant="h5"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Column>
        <Column className="absolute bg-black_900_99 flex flex-col items-center justify-start sm:p-[15px] md:p-[28px] p-[55px] w-[100%]">
          <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[644px] sm:mx-[0] sm:pb-[15px] md:pb-[26px] pb-[52px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 flex flex-col items-center justify-end sm:p-[15px] p-[16px] md:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Text
                  className="flex-grow font-bold sm:mt-[1px] md:mt-[2px] mt-[5px] text-black_900"
                  as="h5"
                  variant="h5"
                >
                  Edit Space
                </Text>
                <Img
                  src="/images/img_arrowright_gray_900.svg"
                  className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                  alt="arrowright One"
                />
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[25px] mt-[50px] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Column className="flex flex-col items-end justify-start sm:pl-[15px] pl-[18px] md:pl-[9px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] rounded-radius8 w-[100%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Space Name:
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                      wrapClassName="sm:mx-[0] sm:w-[100%] w-[77%]"
                      type="text"
                      name="EmailId"
                      placeholder="Enter Name"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBluegray50"
                    ></Input>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Text
                      className="font-medium mt-[17px] sm:mt-[6px] md:mt-[8px] text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Description:
                    </Text>
                    <TextArea
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                      name="EmailId One"
                      placeholder="Write here.."
                    ></TextArea>
                  </Row>
                  <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Loaction:
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[81%]"
                        name="EmailId Two"
                        placeholder="Enter Location"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[24px] sm:mt-[9px] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Capacity:
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[81%]"
                        name="EmailId Three"
                        placeholder="Capacity to accomodate"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[24px] sm:mt-[9px] sm:px-[0] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Location:
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[81%]"
                        name="EmailId Four"
                        placeholder="Add Location"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[55%]">
                  <Button className="cursor-pointer font-medium min-w-[46%] text-[16px] text-center text-white_A700 w-[max-content]">
                    Edit
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[46%] md:ml-[12px] ml-[24px] sm:ml-[9px] text-[16px] text-center text-indigo_600 w-[max-content]"
                    variant="OutlineIndigo600"
                  >
                    Reset
                  </Button>
                </Row>
              </Column>
              <Column className="flex flex-col justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                <Line className="bg-bluegray_102 h-[1px] w-[100%]" />
                <Column className="flex flex-col justify-start md:ml-[25px] ml-[50px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] pl-[10px] md:pl-[5px] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] rounded-radius6 w-[100%]">
                    <Text
                      className="font-medium mt-[18px] sm:mt-[7px] md:mt-[9px] text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Upload Image:
                    </Text>
                    <Column className="bg-bluegray_50 flex flex-col items-center justify-start sm:mx-[0] outline outline-[2px] outline-indigo_600 sm:p-[15px] p-[16px] md:p-[8px] rounded-radius6 sm:w-[100%] w-[76%]">
                      <Img
                        src="/images/img_rectangle501.png"
                        className="max-w-[100%] rounded-radius4 sm:w-[100%] w-[42%]"
                        alt="Rectangle501"
                      />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[18px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                        <Button
                          className="flex items-center justify-center min-w-[58%] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="/images/img_music.svg"
                              className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                              alt="music"
                            />
                          }
                          size="sm"
                          variant="OutlineIndigo600"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-indigo_600">
                            Click to upload
                          </div>
                        </Button>
                        <Text
                          className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          No file chosen
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[56%]">
                    <Button className="cursor-pointer font-medium min-w-[46%] text-[16px] text-center text-white_A700 w-[max-content]">
                      Upload
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[46%] md:ml-[12px] ml-[24px] sm:ml-[9px] text-[16px] text-center text-indigo_600 w-[max-content]"
                      variant="OutlineIndigo600"
                    >
                      Reset
                    </Button>
                  </Row>
                </Column>
                <Line className="bg-bluegray_102 h-[1px] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]" />
                <Column className="flex flex-col justify-start md:ml-[100px] ml-[194px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] pt-[4px] sm:px-[0] rounded-radius8 sm:w-[100%] w-[63%]">
                  <Column className="flex flex-col justify-start rounded-radius8 w-[100%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Select available resources:
                    </Text>
                    <Column className="bg-bluegray_50 flex flex-col justify-start mt-[11px] sm:mt-[4px] md:mt-[5px] sm:p-[3px] md:p-[4px] p-[9px] rounded-radius8 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[42%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[46%] text-[14px] text-bluegray_700 text-center w-[max-content]"
                          size="sm"
                          variant="OutlineBluegray102"
                        >
                          ABC
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[46%] ml-[14px] sm:ml-[5px] md:ml-[7px] text-[14px] text-bluegray_700 text-center w-[max-content]"
                          size="sm"
                          variant="OutlineBluegray102"
                        >
                          PQR
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Button className="cursor-pointer font-medium min-w-[34%] mt-[16px] sm:mt-[6px] md:mt-[8px] text-[16px] text-center text-white_A700 w-[max-content]">
                    Update
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default EditSpacePage;
