import RegisterForm from "@/app/Components/auth/RegisterForm/RegisterForm";
import React from "react";

function page() {
  return (
    <div className="auth-page w-full h-full flex justify-center items-center">
      <RegisterForm />
    </div>
  );
}

export default page;
