import Modal, { type ModalProps } from "./modal";

type AboutMeModalProps = Omit<ModalProps, "children" | "image" | "title">;

export const AboutMeModal = ({ ...props }: AboutMeModalProps) => {
  return (
    <Modal image="/images/maiada.jpeg" title="About Me" {...props}>
      <div>
        <p>
          Hi! I&apos;m a Frontend Software Engineer with over 6 years of experience
          in Web, Extension and Mobile development.
        </p>
        <p>My background
          as a former teacher has given me a strong UX skillset that I apply to
          building accessible and user-friendly digital experiences.</p>
        <p>
          Throughout my career, I&apos;ve enjoyed working in startups. 
          From working closely with the design team to build out a custom design system, 
          to collaborating with backend engineers to build end-to-end features, 
          I value working in an environment where ownership is encouraged.
        </p>
        <p>
          When I&apos;m not writing code I&apos;m likely reading, figure
          skating, or singing with my band QUIET TIME.
        </p>
      </div>
    </Modal>
  );
};
