"use client";

import FindHospitalRegionBtn from "./search/FindHospitalRegionBtn";
import { supabase } from "@/api/supabase";
import { useQuery } from "@tanstack/react-query";

const FindHospital = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["hospitalRegion"],
    queryFn: async () => {
      const response = await supabase.from("hospital_region").select("*");

      const { data } = response;
      return data;
    }
  });
  if (isLoading) {
    <p>로딩 중...</p>;
    console.log("이즈 로동");
  }
  if (isError) {
    <p>오류가 발생했습니다.</p>;
    console.log("실패함");
  }

  return (
    <div className="relative mt-[30px] mb-[38px]">
      <p className="bold-18">지역별로 병원 찾기</p>
      <div className="inline-grid grid-cols-4 w-full gap-x-[50px]">
        {data?.map((item) => {
          return (
            <FindHospitalRegionBtn key={item.region_id} regionInfo={item} />
          );
        })}
      </div>
    </div>
  );
};

export default FindHospital;
