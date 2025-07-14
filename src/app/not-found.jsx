import { Layout } from "@/layouts/Layout";
import Link from "next/link";

const errorImg = "/images/error_img.png";
const rightArrow = "/icon/right_arrow.svg";

export default function NotFoundPage() {
  return (
    <Layout breadcrumbTitle="Error Page" breadcrumbSubtitle={"404"}>
      <section className="error__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="error__img">
                <img src={errorImg} alt="404 Error" />
              </div>
              <div className="error__content">
                <h2 className="title">¡Ups! Algo salió mal...</h2>
                <p>
                  Parece que esta página decidió tomarse un descanso.
                  <br /> Ya estamos trabajando en ello.
                </p>
                <Link href="/" className="btn">
                  Regresar{" "}
                  <img
                    src={rightArrow}
                    alt="Right Arrow"
                    className="injectable"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
