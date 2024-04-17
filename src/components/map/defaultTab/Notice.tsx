// 유의사항 div
import Image from "next/image";
import notice_btn from "@/assets/icons/notice_btn.png";
import React from "react";

const Notice = () => {
  return (
    <section className="border-t border-b border-gray-100 my-5 py-2">
      <div className="flex w-[91px] mb-3">
        <Image src={notice_btn} alt="주의사항" />
        <h2 className="ml-1 bold-18">유의사항</h2>
      </div>

      <p className="regular-14 text-gray-800 ml-1">
        위 사이트에서는 추가적인 사항을 제공하지 않습니다.
        <br />
        추가 사항은 해당 병원에 문의 부탁드립니다.
      </p>
    </section>
  );
};

export default Notice;
