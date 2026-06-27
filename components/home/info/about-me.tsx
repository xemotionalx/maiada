import Modal, { type ModalProps } from "./modal";

type AboutMeModalProps = Omit<ModalProps, "children" | "image" | "title">;

export const AboutMeModal = ({ ...props }: AboutMeModalProps) => {
  return (
    <Modal image="/images/maiada-edited.png" title="About Me" {...props}>
      <div>
        <p>
          Hi! I&apos;m a Lead Frontend Software Engineer with over 6 years of experience building
          consumer and enterprise products at early-stage startups.
        </p>
        <p>I specialize in frontend architecture,
        React Native, design systems, and leading cross-functional product development from concept through launch.</p>
        <p>
          When I&apos;m not writing code I&apos;m likely reading, figure
          skating, or singing with my band QUIET TIME.
        </p>
      </div>
    </Modal>
  );
};
