import React from "react";
import { View, Text, Image } from "react-native";
import tailwind from "tailwind-rn";

import * as HomeConstants from "../../helpers/homeConstants";
import * as Constants from "../../helpers/constants";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

import { homeImages} from "../../DummyData/Data"

const Banner = () => {

  return (
    <>
      <View style={[HomeConstants.kissDateView, Constants.CommonStyle]}>
        <Swiper
          pagination={true}
          loop={true}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
          style={HomeConstants.kissDateImg}>
          {homeImages.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  style={[
                    HomeConstants.existingUserImgOverlay,
                    {
                      width: 375,
                      height: 178,
                      left: "1.15rem",
                      top: "1.1rem",
                      overflow: "hidden",
                      boxShadow: "0 1px 11px 0 rgb(0 0 0 / 17%)"
                    },
                  ]}
                  source={{ uri: item.homeImg }}
                />
                <Image
                  style={[
                    HomeConstants.styles.kissDateImgOverlay,
                    { overflow:"hidden"},
                  ]}
                  source={require("../../../assets/images/datekissoverlay.png")}
                />
                <Text style={[HomeConstants.kissDateText, ]}>
                 {item.text}
                </Text>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </View>
    </>
  );
};

export default Banner;
