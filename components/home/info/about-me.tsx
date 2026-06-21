import Modal, { type ModalProps } from "./modal";

type AboutMeModalProps = Omit<ModalProps, "children">;

export const AboutMeModal = ({ ...props }: AboutMeModalProps) => {
  return (
    <Modal title="About Me" {...props}>
      <div>
        <p>
          Hello! I&apos;m MaiAda Carpano, a passionate developer with a love for
          creating intuitive and engaging user experiences. I enjoy working on
          projects that challenge me to learn and grow, and I&apos;m always
          excited to collaborate with others to bring innovative ideas to life.
        </p>
      </div>
    </Modal>
  );
};
