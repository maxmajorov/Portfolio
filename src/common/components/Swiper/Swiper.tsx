import React from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import classes from "./Swiper.module.scss";
// import "swiper/css";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss";
import { WorkItem } from "../../../components/ProjectItem/ProjectItem";
import { WorksStateType } from "../../../components/ProjectsList/ProjectsList";

type MySwiperPropsType = {
  projects: Array<WorksStateType>;
};

export const MySwiper: React.FC<MySwiperPropsType> = ({ projects }) => {
  console.log(window.innerWidth);
  return (
    <div className={classes.swiper}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        speed={1000}
        effect={"coverflow"}
        spaceBetween={40}
        slidesPerView={
          window.innerWidth < 965
            ? 1
            : window.innerWidth > 965 && window.innerWidth < 1480
            ? 2
            : 3
          // window.innerWidth < 1480 ? 2 : window.innerWidth < 965 ? 1 : 3
        } //3
        loop
        grabCursor={true}
        pagination={{ clickable: true }}
        // scrollbar={{draggable: true}}
      >
        {projects.map((work) => (
          <SwiperSlide key={work.id}>
            <WorkItem
              key={work.id}
              image={work.image}
              title={work.title}
              description={work.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
