import Modal, { type ModalProps } from "./modal";

type AboutMeModalProps = Omit<ModalProps, "children">;

export const AboutMeModal = ({ ...props }: AboutMeModalProps) => {
  return (
    <Modal title="About Me" {...props}>
      <div>
        <p>
          Hi! I&apos;m a Frontend Software Engineer with 6 years of experience
          in Web, Extension and Mobile development. In addition, my background
          as a former teacher has given me a strong UX skillset that I apply to
          building accessible and user-friendly digital experiences.
        </p>
        <p>
          Throughout my career, I&apos;ve enjoyed working in startup
          environments. I really enjoy taking on a high level of ownership,
          working with cross-functional teams, and driving both product and
          technical initiatives forward.
        </p>
        <p>
          When I&apos;m not writing code I&apos;m likely reading, figure
          skating, or singing with my band QUIET TIME!
        </p>
      </div>
    </Modal>
  );
};
