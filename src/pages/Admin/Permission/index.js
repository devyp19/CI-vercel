import React from "react";

import { Button, Column, Img, Input, List, Row, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const PermissionPage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
          <Sidebar2 className="md:hidden sm:hidden w-[15%]" />
          <Column className="flex flex-col items-center justify-start max-w-[1640px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[11px] sm:p-[15px] p-[22px] w-[100%]">
              <Text
                className="font-medium ml-[10px] sm:ml-[3px] md:ml-[5px] text-black_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Documents
              </Text>
              <Text
                className="bg-deep_orange_A200 flex font-bold items-center mr-[10px] sm:mr-[3px] md:mr-[5px] px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[36px]"
                variant="body2"
              >
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:py-[15px] py-[18px] md:py-[9px] rounded-radius8 sm:w-[100%] w-[97%]">
              <Column className="flex flex-col items-end justify-start sm:mb-[31px] md:mb-[41px] mb-[80px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[25%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Sort By
                    </Text>
                    <Row className="bg-bluegray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:p-[3px] md:p-[4px] p-[9px] rounded-radius4 sm:w-[100%] w-[82%]">
                      <Column className="flex flex-col items-center md:ml-[3px] ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          --Select one--
                        </Text>
                      </Column>
                      <Img
                        src="/images/img_arrowup_gray_900.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mr-[15px] sm:mr-[5px] md:mr-[7px] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="arrowup"
                      />
                    </Row>
                  </Row>
                  <Button
                    className="flex items-center justify-center md:ml-[358px] min-w-[11%] ml-[694px] sm:ml-[277px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="/images/img_plus.svg"
                        className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                        alt="plus"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      Create Folder
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center md:ml-[12px] min-w-[9%] ml-[24px] sm:ml-[9px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="/images/img_download.svg"
                        className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                        alt="download"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      Download
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center md:ml-[12px] min-w-[8%] ml-[24px] sm:ml-[9px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="/images/img_upload_24X24.svg"
                        className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                        alt="upload"
                      />
                    }
                    variant="FillDeeporangeA200"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      Upload
                    </div>
                  </Button>
                </Row>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="flex md:mt-[8px] mt-[16px] sm:mt-[6px] w-[100%]"
                  name="Group3599"
                  placeholder="Permission"
                  prefix={
                    <Img
                      src="/images/img_arrowleft_gray_900.svg"
                      className="ml-[10px] mr-[12px] sm:mr-[4px] sm:ml-[3px] md:mr-[6px] md:ml-[5px] my-[auto]"
                      alt="arrow_left"
                    />
                  }
                  size="2xl"
                  variant="OutlineGray300"
                ></Input>
                <Button
                  className="flex items-center justify-center md:mr-[15px] md:mt-[15px] min-w-[11%] mr-[30px] mt-[30px] sm:mr-[11px] sm:mt-[11px] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="/images/img_plus.svg"
                      className="mr-[8px] sm:mr-[3px] md:mr-[4px] text-center"
                      alt="plus"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                    Add Permission
                  </div>
                </Button>
                <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <List
                    className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[12px] sm:p-[15px] p-[24px] rounded-radius12 shadow-bs1 w-[100%]">
                        <Column className="flex flex-col justify-start md:ml-[3px] ml-[6px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[18%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                            <Text
                              className="font-medium mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Alex Denver
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                            <Text
                              className="font-medium text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Email :
                            </Text>
                            <Text
                              className="font-medium sm:ml-[11px] md:ml-[14px] ml-[28px] mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              alexdenver@gmail.com
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Roles :
                            </Text>
                            <Text
                              className="font-medium sm:ml-[10px] md:ml-[13px] ml-[27px] mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Read, Write
                            </Text>
                          </Row>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mr-[3px] mr-[6px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[8%]">
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[44px] items-center justify-center sm:w-[17px] md:w-[22px] w-[44px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="/images/img_edit_44X44.svg"
                              className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="edit"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[44px] items-center justify-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:w-[17px] md:w-[22px] w-[44px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="/images/img_trash_44X44.svg"
                              className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="trash"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[12px] sm:p-[15px] p-[24px] rounded-radius12 shadow-bs1 w-[100%]">
                        <Column className="flex flex-col justify-start md:ml-[3px] ml-[6px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[18%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                            <Text
                              className="font-medium mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Alex Denver
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                            <Text
                              className="font-medium text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Email :
                            </Text>
                            <Text
                              className="font-medium sm:ml-[11px] md:ml-[14px] ml-[28px] mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              alexdenver@gmail.com
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Roles :
                            </Text>
                            <Text
                              className="font-medium sm:ml-[10px] md:ml-[13px] ml-[27px] mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Read, Write
                            </Text>
                          </Row>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mr-[3px] mr-[6px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[8%]">
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[44px] items-center justify-center sm:w-[17px] md:w-[22px] w-[44px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="/images/img_edit_44X44.svg"
                              className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="edit One"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[44px] items-center justify-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:w-[17px] md:w-[22px] w-[44px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="/images/img_trash_44X44.svg"
                              className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="trash One"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[12px] sm:p-[15px] p-[24px] rounded-radius12 shadow-bs1 w-[100%]">
                        <Column className="flex flex-col justify-start md:ml-[3px] ml-[6px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[18%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                            <Text
                              className="font-medium mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Alex Denver
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                            <Text
                              className="font-medium text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Email :
                            </Text>
                            <Text
                              className="font-medium sm:ml-[11px] md:ml-[14px] ml-[28px] mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              alexdenver@gmail.com
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Roles :
                            </Text>
                            <Text
                              className="font-medium sm:ml-[10px] md:ml-[13px] ml-[27px] mt-[1px] text-black_901 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Read, Write
                            </Text>
                          </Row>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mr-[3px] mr-[6px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[8%]">
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[44px] items-center justify-center sm:w-[17px] md:w-[22px] w-[44px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="/images/img_edit_44X44.svg"
                              className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="edit Two"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[18px] md:h-[23px] h-[44px] items-center justify-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:w-[17px] md:w-[22px] w-[44px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="/images/img_trash_44X44.svg"
                              className="h-[24px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="trash Two"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PermissionPage;
