
import Modal, { ModalProps } from "./modal";
import CroissantQRCode from "../CroissantQRCode";


type PortfolioModalProps = Omit<ModalProps, "children">;

export const PortfolioModal = ({ ...props }: PortfolioModalProps) => {
  return (
    <Modal  title="Portfolio" {...props}>
      <div>
        <p>
          Over the past four years I&apos;ve lead the frontend build for the
          customer-facing web and mobile experience for Croissant. My work has
          spanned product development, frontend architecture, mobile
          applications, engineering leadership, and team growth.
        </p>
        <p>
          Download the{" "}
          <a
            href="https://apps.apple.com/us/app/croissant/id1662287582"
            target="_blank"
            rel="noopener noreferrer"
          >
            Croissant app
          </a>{" "}
          to see a sample of my work:
        </p>
        <CroissantQRCode />
      </div>
    </Modal>
  );
};
