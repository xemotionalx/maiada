import Modal, { type ModalProps } from "./modal";

type PortfolioModalProps = Omit<ModalProps, "children">;

export const PortfolioModal = ({ ...props }: PortfolioModalProps) => {
  return (
    <Modal title="Portfolio" {...props}>
      <div>
        <p>
          Over the past four years I&apos;ve helped build the customer-facing
          web and mobile experience for Croissant, a fintech platform focused on
          empowering intentional commerce through resale. My work has spanned
          product development, frontend architecture, mobile applications,
          engineering leadership, and team growth.
        </p>
        <p>Download the Croissant app to see a sample of my work!</p>
      </div>
    </Modal>
  );
};
