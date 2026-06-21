import Modal, { type ModalProps } from "./modal";

type QuietTimeModalProps = Omit<ModalProps, "children">;

export const QuietTimeModal = ({ ...props }: QuietTimeModalProps) => {
  return (
    <Modal title="QUIET TIME" {...props}>
      <div>
        <p>This is my band, QUIET TIME.</p>
      </div>
    </Modal>
  );
};
