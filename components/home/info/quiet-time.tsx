import ModalBasic, { ModalBasicProps } from "@/components/ui/ModalBasic";
import SpotifyEmbed from "./SpotifyEmbed";

type QuietTimeModalProps = Omit<ModalBasicProps, "children">;

export const QuietTimeModal = ({ ...props }: QuietTimeModalProps) => {
  return (
    <ModalBasic title="QUIET TIME" {...props}>
      <SpotifyEmbed />
    </ModalBasic>
  );
};
