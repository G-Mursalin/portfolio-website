// NextJS
import { TProject } from "@/utils/projectsData";
import Image from "next/image";
import Link from "next/link";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Type
type PropTypes = {
  item: TProject;
};

export default function ProjectsItems({ item }: PropTypes) {
  return (
    <div className="work__card" key={item.id}>
      <Image src={item.mainImage} alt="" className="work__img" />
      <h3 className="work__title">{item.name}</h3>
      <div className="work__cart__button-container">
        <a
          href={item.link}
          target="_blank"
          className="work__button"
          rel="noreferrer"
        >
          View Live <AiOutlineArrowRight className="work__button-icon" />
        </a>
        <Link href={`/projects/${item.id}`} className="work__button">
          View Details
          <AiOutlineArrowRight className="work__button-icon" />
        </Link>
      </div>
    </div>
  );
}
