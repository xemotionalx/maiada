import Image from "next/image";

export default function NotebookButton() {
  return (
    <button type="button" className="notebook picture-button">
      <Image
        src="/images/notebook.png"
        alt="cute notebook on the chair"
        fill
        style={{ objectFit: "cover" }}
      />
    </button>
  );
}
