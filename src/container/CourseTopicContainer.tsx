import { pythonThumbnais } from "../assets/images";
import OutlinedButton from "../components/Outlined Button/OutlinedButton";
import { pythonDesc, topics } from "../constants/CourseDescription";
import { courseDescProps } from "../constants/Types";

export type courseTopicProps = {
  handleTopicClick: any;
  data: courseDescProps;
};

const CourseTopicContainer = ({ handleTopicClick, data }: courseTopicProps) => {
  const handleClick = (id: number) => {
    handleTopicClick(id);
  };
  return (
    <>
      <div className="flex items-center gap-4">
        {topics.map((topic) => (
          <button key={topic.id} onClick={() => handleClick(topic.id)}>
            {topic.title}
          </button>
        ))}
      </div>
      <div className="border-2 border-gray-200 p-6 flex flex-col">
        <div className="w-2/4">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <p className="mb-6">{data.desc}</p>
          <OutlinedButton type="button" title={data.buttonText} />
        </div>
        <div className="flex">
          {pythonDesc.map((python) => (
            <div className="flex flex-col p-8 gap-1 w-[300px]">
              <img
                width="250px"
                className="border mb-4"
                src={python.image}
                alt=""
              />
              {/* <h1 className="text-xl font-bold">{python.courseTitle}</h1> */}
              <p className="text-xl font-bold">{python.description}</p>
              <p className="text-sm text-gray-500">{python.instructorName}</p>
              <p>({python.rating})</p>
              <p>${python.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseTopicContainer;
