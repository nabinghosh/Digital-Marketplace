import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Card>
        <CardHeader>
          <h1>Welcome to our Landing Page</h1>
        </CardHeader>
        <CardBody>
          <p>
            This is a sample landing page. 
          </p>
          <Image
            src="/path/to/your/image.jpg"
            alt="Landing Page Image"
            width={500}
            height={300}
          />
        </CardBody>
      </Card>
    </main>
  );
}
