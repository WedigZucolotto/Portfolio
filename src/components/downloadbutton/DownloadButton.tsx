import * as S from "./style";
import iconDownload from "../../img/iconDownload.svg";

export const DownloadButton = ({ fileUrl }: { fileUrl: string }) => {
  const handleDownload = async () => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      "Currículo - Douglas Zucolotto Gonçalves.pdf"
    );
    document.body.appendChild(link);
    link.click();

    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  };

  return (
    <S.StyledDownloadButton onClick={handleDownload}>
          <p>Download CV</p>
          <img src={iconDownload} alt="" />
    </S.StyledDownloadButton>
  );
};
