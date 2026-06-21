import Modal, { type ModalProps } from "./modal";

type ResumeModalProps = Omit<ModalProps, "children">;

export const ResumeModal = ({ ...props }: ResumeModalProps) => {
  return (
    <Modal title="Resume" {...props}>
      <div>
        <p>Resume is coming soon...</p>
        <p>
          In the meantime you can check out my{" "}
          <a
            href="https://www.linkedin.com/in/maiadac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </Modal>
  );
};
