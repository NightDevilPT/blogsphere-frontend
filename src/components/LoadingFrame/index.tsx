import React from "react";
import HorizontalSkeleton from "../CardFrame/HorizontalCard/Skeleton";
import VerticalSkeleton from "../CardFrame/VerticalCard/Skeleton";

interface IProps {
	layout:boolean
}

const LoadingFrame = ({layout}:IProps) => {
  return layout ? (
    <React.Fragment>
      <HorizontalSkeleton />
      <HorizontalSkeleton />
      <HorizontalSkeleton />
      <HorizontalSkeleton />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <VerticalSkeleton />
      <VerticalSkeleton />
      <VerticalSkeleton />
      <VerticalSkeleton />
    </React.Fragment>
  );
};

export default LoadingFrame;
