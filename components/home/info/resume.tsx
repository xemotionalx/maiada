import Modal, { type ModalProps } from "./modal";

type ResumeModalProps = Omit<ModalProps, "children">;

export const ResumeModal = ({ ...props }: ResumeModalProps) => {
  return (
    <Modal title="Resume" {...props}>
      <div>
        <p>This is my resume!</p>
      </div>
    </Modal>
  );
};
