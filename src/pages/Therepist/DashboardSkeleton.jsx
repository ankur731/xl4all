import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./DashboardSkeleton.css";

export const AppCard = () => {
  return (
    <div className="app-card">
      <div className="app-card-left">
        <Skeleton duration={1} height={100} width={120} />
        <div>
          <Skeleton duration={1} height={15} width={100} />
          <Skeleton duration={1} height={15} width={80} />
        </div>
      </div>
      <div className="app-card-right">
        <Skeleton duration={1} height={45} width={255} />
        <div className="right-bottom">
          <Skeleton duration={1} height={45} width={120} />
          <Skeleton duration={1} height={45} width={120} />
        </div>
      </div>
    </div>
  );
};
function DashboardSkeleton(props) {
  return (
    <div>
        <div className="top-stats ">
      {!props.patient &&
          <>
          <Skeleton duration={1} height={80} width={300} />
          <Skeleton duration={1} height={80} width={300} />
          <Skeleton duration={1} height={80} width={300} />
          <Skeleton duration={1} height={80} width={300} />
          </>
      }
        </div>
      <div className="row">
        <div className="col-7">
          <div className="px-3 py-3">
            <Skeleton duration={1} height={25} width={200} />
          </div>

          <AppCard />
          <div className="px-3 py-3">
            <Skeleton duration={1} height={25} width={200} />
          </div>
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
        <div className="col-5 pt-5">
          <Skeleton duration={1} height={250} width={400} />
          <Skeleton duration={1} height={250} width={400} />
        </div>
      </div>
    </div>
  );
}

export default DashboardSkeleton;
