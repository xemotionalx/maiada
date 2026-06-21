import Modal, { type ModalProps } from "./modal";

type QuietTimeModalProps = Omit<ModalProps, "children">;

export const QuietTimeModal = ({ ...props }: QuietTimeModalProps) => {
  return (
    <Modal title="QUIET TIME" {...props}>
      <div>
        <iframe
          title="Quiet Time album"
          src="https://open.spotify.com/embed/album/0PnpiJiogeVVMCaZ9IOU8k?utm_source=generator"
          width="100%"
          height="352"
          style={{ border: 0, borderRadius: "12px" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Modal>
  );
};
