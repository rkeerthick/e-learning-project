import { courseDescription, topics } from "../constants/CourseDescription";
import OutlinedButton from "../components/Outlined Button/OutlinedButton";
import { useState } from "react";
import { courseDescProps } from "../constants/Types";
import CourseTopicContainer from "./CourseTopicContainer";
import { pythonThumbnais } from "../assets/images";

const CourseSection = () => {
  const [data, setData] = useState<courseDescProps>(courseDescription[0]);

  const handleTopicClick = (index: number): void => {
    setData(courseDescription[index]);
  };
  return (
    <div className="w-3/4 mx-auto my-16 flex flex-col gap-8">
      <h1 className="text-4xl font-bold">A broad selection of courses</h1>
      <h3 className="text-lg text-gray-600 font-light">
        Choose from over 210,000 online video courses with new additions
        published every month
      </h3>
      <CourseTopicContainer handleTopicClick={handleTopicClick} data={data} />
      
    </div>
  );
};

export default CourseSection;
