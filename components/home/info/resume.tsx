import Modal, { ModalProps } from "./modal";


type ResumeModalProps = Omit<ModalProps, "children">;

export const ResumeModal = ({ ...props }: ResumeModalProps) => {
  return (
    <Modal title="Resume" {...props}>
      <div>
        <p>You can download my resume <a href="pdfs/maiada-carpano-resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>
          You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/maiadac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> or take a look at my <a href="https://github.com/xemotionalx" target="_blank" rel="noopener noreferrer">GitHub</a>.
          .
        </p>
      </div>
    </Modal>
  );
};
