import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href="/resume/Jaivik's Resume.pdf"
      target="_blank"
      download
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
