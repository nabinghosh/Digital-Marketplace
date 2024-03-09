import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Themeswitcher from "@/components/ThemeSwitcher";
import Link from "next/link";
// import { redirect } from 'next/navigation'

export default function Home() {

  // const accessDenied = true
  // if (accessDenied) {
  //   redirect('/login')
  // }

  return (
    <MaxWidthWrapper>
      <Themeswitcher>
      <div className="mx-auto flex flex-col text-center items-center py-20 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-600 text-pretty sm:text-5xl">
        Where Learning Takes Flight : Welcome to{' '}
          <span className="text-cyan-600">
          SwanLake
          </span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-default-400">
        Where AI guides your learning journey, fostering deep understanding through 
        interactive experiences. Dive in, connect, and discover the true potential within. ✨
        </p>
      </div>
      </Themeswitcher>
    </MaxWidthWrapper>
  );
}
