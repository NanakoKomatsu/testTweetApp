/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function CommentCard(props) {
  const { post, user, overrides, ...rest } = props;
  const [bodyBackgroundColor, setBodyBackgroundColor] =
    useStateMutationAction(undefined);
  const cardContentOnMouseEnter = () => {
    setBodyBackgroundColor("#00000008");
  };
  const cardContentOnMouseLeave = () => {
    setBodyBackgroundColor("transparent");
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="473px"
      height="195px"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCard")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="441px"
        height="120px"
        shrink="0"
        position="relative"
        onMouseEnter={() => {
          cardContentOnMouseEnter();
        }}
        onMouseLeave={() => {
          cardContentOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "CardContent")}
      >
        <Flex
          gap="16px"
          position="absolute"
          top="0px"
          left="0px"
          direction="row"
          width="441px"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          backgroundColor={bodyBackgroundColor}
          {...getOverrideProps(overrides, "Body")}
        >
          <Image
            width="80px"
            height="80px"
            shrink="0"
            position="relative"
            borderRadius="64px"
            padding="0px 0px 0px 0px"
            src={user?.profilePic}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Flex
            gap="8px"
            direction="column"
            width="345px"
            grow="1"
            basis="345px"
            height="80px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame29766879")}
          >
            <Flex
              gap="16px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame29766880")}
            >
              <Flex
                gap="16px"
                direction="row"
                width="fit-content"
                alignItems="flex-start"
                shrink="0"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame29766881")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={user?.name}
                  {...getOverrideProps(overrides, "Author")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(92,102,112,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${"@"}${user?.handle}`}
                  {...getOverrideProps(overrides, "Timestamp")}
                ></Text>
              </Flex>
              <Flex
                gap="0"
                direction="row"
                width="175px"
                justifyContent="flex-end"
                alignItems="flex-start"
                grow="1"
                basis="175px"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame29766885")}
              >
                <MyIcon
                  width="24px"
                  height="24px"
                  shrink="0"
                  overflow="hidden"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="more_horiz"
                  {...getOverrideProps(overrides, "MyIcon29766886")}
                ></MyIcon>
              </Flex>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.content}
              {...getOverrideProps(
                overrides,
                "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="80px"
          position="absolute"
          top="96px"
          left="0px"
          direction="row"
          width="441px"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Like")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="favorite_border"
              {...getOverrideProps(overrides, "MyIcon29766896")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.likes}
              {...getOverrideProps(overrides, "99")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
