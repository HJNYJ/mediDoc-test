// 로그인 페이지
"use client";

import React from "react";
import { supabase } from "@/api/supabase";
import { useRouter } from "next/navigation";
import {
  GoogleIcon,
  KakaoIcon,
  LogoIcon
} from "@/components/layout/CheckIcons";

const LoginPage = () => {
  const router = useRouter();

  const signInWithKakao = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "kakao",
        options: { redirectTo: "http://localhost:3000/home" }
      });
      if (error) throw error;
      router.push("/home");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "https://medi-doc-three.vercel.app/home",
          queryParams: {
            access_type: "offline",
            prompt: "consent"
          }
        }
      });
      if (error) throw error;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <article className="flex justify-center mt-20">
        <LogoIcon />
      </article>
      <section className="mx-[16px] my-[30%]">
        <button onClick={() => signInWithKakao()}>
          <KakaoIcon />
        </button>
        <button onClick={() => signInWithGoogle()}>
          <GoogleIcon />
        </button>
      </section>
    </div>
  );
};

export default LoginPage;
