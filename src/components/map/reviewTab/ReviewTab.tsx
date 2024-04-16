// "리뷰" 탭을 눌렀을 때 나오는 div

import React from "react";
import ReviewList from "../defaultTab/ReviewList";
import { TabList } from "@/types";

// 탭으로 들어갔을때 보여지는 방문자 리뷰 (전체) 탭 내용들 (별점/최신순 볼 수 있음)
const ReviewTab = ({
  reviewDetailData,
  selected
}: TabList & { reviewDetailData: any }) => {
  return <ReviewList reviewDetailData={reviewDetailData} />;
};

export default ReviewTab;
