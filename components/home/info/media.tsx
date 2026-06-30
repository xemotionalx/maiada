import Modal, { ModalProps } from "./modal";
import "./media.css";

type MediaModalProps = Omit<ModalProps, "children">;

export const MediaModal = ({ ...props }: MediaModalProps) => {
  return (
    <Modal title="Media" {...props}>
      <div>
        <ul className="media-list">
          <li>
            <a
              href="https://www.lps.upenn.edu/about/news/how-one-student-discovered-tech-industry-not-ivory-tower"
              target="_blank"
              rel="noopener noreferrer"
            >
              Penn LPS
            </a>
            {" "}
            - &quot;How one student discovered that the tech industry is not an ivory tower&quot;
          </li>
          <li>
            <a
              href="https://technical.ly/software-development/coding-bootcamp-grads-why-learn-dev-skills-penn-lps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technical.ly Philly
            </a>
            {" "}
            - &quot;Why these 4 new coding bootcamp grads decided to learn dev skills&quot;
          </li>
          <li>
            <a
              href="https://technical.ly/software-development/maiada-carpanos-front-end-engineer-philly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technical.ly Philly
            </a>
            {" "}
            - How I Got Here: MaiAda Carpano&apos;s journey from middle school teacher to
            front-end engineer
          </li>
          <li>
            <a
              href="https://vimeo.com/816690437?turnstile=1.PGj9wtcSg5XXc34euO42uMiB90rcDMvNLW2Xt4C8wFuhB_nDwqt0FmiTKHACRohjS8gF6nc2UFJLRzwHNVCvQFnD3Wf87CJhjMgnkS60oBfUNLstAGFA_4O7WQGRa6IdcCXGXSuEnUmAH_5usL6QMo-rQy20EgBMh462bf2HVAQOQwnmBIaadsWTrcQ7X_7YBPJ8XRJxfAvtL8LuMWZkfVbgJnDVP8-fO6HnNZkVFGcZNCp3z3M4OC_9AiiDU6ksodnZoXmBDIu7UplTEoRnTGoXUiA_NyRtKPFdpmnAV8AVqTrQSA5wSTS2ayZsUIHTG_BJDXDEYLAwYvLPIJLvYP_4-KTPgEIcLLMfXciT7rMmd4mAWZ-QFDHC2MlSTJr1clUNBivqVxgqR7Hdodel2XEjPsy3T7IWtVQELZfI6IvgxpvKrru6a48tQVwHZ9-R5AO2JHq7Vz2tYGlH7BxUHyHIcJYXy-LmTakxNBqd1VFwUwj09MJP2aWv6fThTDVdkFg8D6wHkfjuznQYLE9gdouWO_UDeBuiGfFi48rEC0Yas2f_ul1S1BiCAjPCrTHYupzlAzRW10Foin8GhDy4WuhElmkDVGnp10Y4CD8KLtzcGn2qkAyzSrLekTJFQbDvUJaguNN5jXoV26up5iKEZ-c3tb9AJ_NNSU_rIWGUeUw.yRRYmEOFaTweHzUserx4Ig.ae88fb8a393d340402887d477ac8c4b4f63ecc8ee4979af6e0b14663df2ced7f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coded By: Volunteer Spotlight
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};
