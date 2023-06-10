import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import postImage1 from "../assets/posts/article_image_01.jpg";
import SuggestedPost from "../containers/SuggestedPost";
import Comments from "../containers/Comments";
import SocialShareButtons from "../components/SocialShareButtons";

const breadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article Title",
    link: "/blog/123",
  },
];

const postData = [
  {
    _id: "1",
    image: postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:15.607+0000",
  },
  {
    _id: "2",
    image: postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:15.607+0000",
  },
  {
    _id: "3",
    image: postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:15.607+0000",
  },
  {
    _id: "4",
    image: postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:15.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetail = () => {
  return (
    <section className=" container mx-auto max-w-5xl flex flex-col p-5 lg:flex-row lg:gap-x-5 lg:items-start">
      <article className="flex-1">
        <BreadCrumbs data={breadCrumbsData} />
        <img src={postImage1} alt="robot" className=" rounded-xl w-full" />
        <Link
          to="/blog?category=selectedCategory"
          className="text-primary text-sm md:text-base font-robot inline-block mt-4"
        >
          EDUCATION
        </Link>
        <h1 className="text-xl md:text-[26px] font-medium font-robot mt-4 text-dark-hard">
          Help children get better education
        </h1>
        <div className="mt-4 text-dark-soft">
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quasi! Non quasi libero deserunt maiores nemo, quo recusandae ipsum
            nulla omnis eius praesentium enim! Blanditiis officia eum
            necessitatibus. Dolor, laborum? Ut dolor nam et ea! Laboriosam quasi
            sed, eius numquam error voluptates, tempora dolores velit, delectus
            consequuntur voluptatem facilis ut in quibusdam incidunt nisi!
            Expedita distinctio reiciendis eos iste voluptate. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quasi tempora fugiat, facere
            exercitationem eligendi pariatur repellat ea recusandae quis nemo
            quae autem? Veritatis corrupti, minima quam illo explicabo magnam
            tempora!
          </p>
        </div>
        <Comments className="mt-10" loggedInUserId="a" />
      </article>
      <div>
        <SuggestedPost
          header="Latest Article"
          posts={postData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />

        <div className="mt-7">
          <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
            Share on:
          </h2>
          <SocialShareButtons
            url={encodeURI(
              "https://www.growth-rocket.com/blog/a-closer-look-at-client-side-server-side-rendering/"
            )}
            title={encodeURIComponent("CSR vs SSR")}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
