import Modal, { type ModalProps } from "./modal";

type PortfolioModalProps = Omit<ModalProps, "children">;

export const PortfolioModal = ({ ...props }: PortfolioModalProps) => {
  return (
    <Modal title="Portfolio" {...props}>
      <div>
        <p>
          I&apos;m the Apps Lead Engineer at Croissant. Download the app and
          take a look at my work.
        </p>
      </div>
    </Modal>
  );
};
