import CardCourseComponent from "@/components/CardCourseComponent";
import CarouselComponent from "@/components/CarouselComponent";
import FooterComponent from "@/components/FooterComponent";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <div className=" container grid grid-cols-2 p-20 ">
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
        <CardCourseComponent />
      </div>
    </div>
  );
}
