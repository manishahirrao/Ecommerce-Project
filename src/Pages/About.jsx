import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterbox from "../Components/NewsLetterbox";

function About() {
  return (
    <>
      <div className="flex items-center flex-col mt-16">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="flex items-center  gap-20 mt-8">
          <img className="h-[600px]" src={assets.about_img} />
          <div className="h-[600px] w-[500px] flex flex-col gap-8 mt-12">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis hic dolorem ab, itaque sapiente, ex nihil debitis
              deleniti, laborum culpa voluptas delectus officiis eius sit nobis
              minima reiciendis neque architecto! Quisquam cum optio explicabo
              libero natus ipsa repudiandae blanditiis animi voluptates! Hic
              dignissimos ad nesciunt eveniet soluta ipsa voluptas perspiciatis
              quibusdam consectetur quo asperiores, incidunt beatae tempora vel
              amet eaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, ipsa architecto ullam magni illum et nostrum. Et,
              animi! Quibusdam illo, incidunt natus possimus itaque vitae dolor
              accusantium et. Numquam, sint?
            </p>

            <p className="text-2xl font-bold">OUR MISIION</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              repellat numquam, laborum nobis fuga impedit fugit praesentium
              harum magni reiciendis asperiores aliquam necessitatibus quas at
              labore, suscipit et quos soluta? Iusto ad quibusdam, velit
              pariatur voluptates delectus? Vel adipisci ipsa placeat harum nisi
              at animi quibusdam ut fuga. Nisi dolore magni aliquid recusandae?
              Veritatis sit eligendi excepturi quidem magnam ducimus.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Title text1={"WHY "} text2={"CHOOSE US"} />

        <div className="flex items-center justify-between mt-8">
          <div className="border border-gray-500 px-12 py-8">
            <p className="text-xl font-bold py-4">Quality Assurance</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda quisquam cumque, ipsa neque error hic molestiae sed
              laboriosam a maiores temporibus molestias similique repellat et
              excepturi reprehenderit, eligendi delectus. Dolore.
            </p>
          </div>
          <div className="border border-gray-500 px-12 py-8">
            <p className="text-xl font-bold py-4">Commision</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda quisquam cumque, ipsa neque error hic molestiae sed
              laboriosam a maiores temporibus molestias similique repellat et
              excepturi reprehenderit, eligendi delectus. Dolore.
            </p>
          </div>
          <div className="border border-gray-500 px-12 py-8">
            <p className="text-xl font-bold py-4">
              Exceptional Customer Service
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda quisquam cumque, ipsa neque error hic molestiae sed
              laboriosam a maiores temporibus molestias similique repellat et
              excepturi reprehenderit, eligendi delectus. Dolore.
            </p>
          </div>
        </div>
      </div>
      <NewsLetterbox />
    </>
  );
}

export default About;
