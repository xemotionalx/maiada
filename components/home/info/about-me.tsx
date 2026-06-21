import Modal, { type ModalProps } from "./modal";

type AboutMeModalProps = Omit<ModalProps, "children">;

export const AboutMeModal = ({ ...props }: AboutMeModalProps) => {
  return (
    <Modal title="About Me" {...props}>
      <div>
        <p>
          I&apos;m a Lead Frontend Engineer with a passion for building
          thoughtful, user-centered products. Over the past four years,
          I&apos;ve helped scale a fintech startup from an early-stage product
          into a mature platform used by thousands of customers, leading
          development across web and mobile applications built with React, React
          Native, and TypeScript.
        </p>
        <p>
          My work sits at the intersection of product, design, and engineering.
          I enjoy translating complex business requirements into intuitive user
          experiences, designing maintainable frontend architectures, and
          establishing engineering practices that help teams move quickly
          without sacrificing quality.
        </p>
        <p>
          Throughout my career I&apos;ve worn many hats—individual contributor,
          technical lead, mentor, and engineering manager. Whether I&apos;m
          building a new feature, defining frontend architecture, improving
          developer experience, or collaborating with stakeholders, I&apos;m
          motivated by creating products that solve real problems and deliver
          meaningful value to users.
        </p>
        <p>
          I thrive in startup environments where ownership is high, ambiguity is
          common, and engineers have the opportunity to shape both the product
          and the technical direction of the company.
        </p>
      </div>
    </Modal>
  );
};
