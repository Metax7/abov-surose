import BlogCard from "./BlogCard";
import BlogSlider from "./BlogSlider";
import StandartContainer from "./StandartContainer";
import Title from "./Title";

export default function BlogSection() {
  const data = (
    <>
      <div className="space-y-16">
        <Title
          title="LATEST BLOGS"
          subTitle="A blog is a discussion or informational website published on the World Wide Web consisting of discrete"
        />
        <div>
          <BlogSlider />
        </div>
      </div>
    </>
  );
  return <StandartContainer data={data} />;
}
