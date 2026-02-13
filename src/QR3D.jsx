import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const ZaloQR = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl w-fit mx-auto">
      <QRCode
        value="https://zalo.me/0949450800"
        size={250}               // Kích thước mã QR
        logoImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png"
        logoWidth={50}           // Độ rộng logo ở giữa
        logoHeight={50}
        logoOpacity={1}
        qrStyle="dots"           // Biến các ô vuông thành dấu chấm (giống ảnh mẫu của bạn)
        eyeRadius={15}           // Bo góc 3 ô vuông định vị ở góc
        quietZone={10}           // Khoảng trắng lề
        fgColor="#000000"        // Màu mã QR
        bgColor="#ffffff"        // Màu nền
      />
      <p className="mt-4 text-gray-600 font-medium">Quét để kết nối Zalo</p>
    </div>
  );
};

export default ZaloQR;