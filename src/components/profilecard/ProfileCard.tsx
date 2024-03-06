import * as S from "./style";
import { Technologies } from "../technologies/Technologies";
import profilePhoto from "../../img/profilePhoto.svg";
import iconEmail from "../../img/iconEmail.svg";
import iconLocation from "../../img/iconLocation.svg";
import iconJob from "../../img/iconJob.svg";
import { DownloadButton } from "../../components/downloadbutton/DownloadButton";
import DouglasCurriculo from "../../download/Currículo - Douglas Zucolotto Gonçalves.pdf";

type ImageTypes = "profilePhoto";

const types = {
  profilePhoto: profilePhoto,
};

interface ProfileCardProps {
  image: ImageTypes;
  title: string;
  email: string;
  location: string;
  job: string;
  technologies: string[];
}

export const ProfileCard = ({
  image,
  title,
  email,
  location,
  job,
  technologies,
}: ProfileCardProps) => {
  return (
    <S.ProfileCard>
      <div className="image-title-container">
        <img src={types[image]} alt="" />
        <p>{title}</p>
      </div>

      <div className="info-container">
        <div className="email">
          <img src={iconEmail} alt="" />
          <p>{email}</p>
        </div>

        <div className="location">
          <img src={iconLocation} alt="" />
          <p>{location}</p>
        </div>

        <div className="job">
          <img src={iconJob} alt="" />
          <p>{job}</p>
        </div>
      </div>

      <div className="technologies">
        {technologies.map((technology) => (
          <Technologies text={technology} />
        ))}
      </div>

      <span className="DownloadButton">
        <DownloadButton fileUrl={DouglasCurriculo} />
      </span>
    </S.ProfileCard>
  );
};
