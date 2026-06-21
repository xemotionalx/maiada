import Image from "next/image";
import "./style.css";

export default function NotebookButton({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <button
      type="button"
      className="notebook notebook-button"
      onClick={onOpenModal}
    >
      <div className="button-inner">
        <span className="notebook-label">resume</span>
        <Image
          src="/images/notebook.png"
          alt="cute notebook on the chair"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </button>
  );
}
