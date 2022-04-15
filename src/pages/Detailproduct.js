import React from "react";
import image1 from "../assets/Mouse.png";
import image2 from "../assets/keyboard.png";
import image3 from "../assets/headphone.png";
import { Button, Container } from "react-bootstrap";
import "../style/Detail.css";

const Detail = () => {
  return (
    <Container>
      <div className="detail">
        <div>
          <img src={image1} alt="Group.png" className="img-detail" />
        </div>
        <div className="text-detail">
          <h1>Mouse</h1>
          <span>Stock : 600</span>
          <br></br>
          <br></br>
          <span>
            - Wireless Mouse <br></br>- Konektivitas wireless 2.4 GHz <br></br>-
            Jarak wireless hingga 10 m <br></br>- Plug and Play - Baterai tahan
            hingga 12 bulan <br></br> <br></br>
            Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse
            yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio
            2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik
            pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x
            baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi
            Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan
            sistem operasi Chrome OS.
          </span>

          <div className="price">
            <h3>Rp.500.000</h3>
          </div>
          <div>
            <Button className="button-buy" size="sm">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
