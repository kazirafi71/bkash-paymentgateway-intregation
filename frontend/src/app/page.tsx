"use client";

import { config } from "@/config/config";
import Axios from "axios";
import { toast } from "react-hot-toast";

export default function Home() {
  const bkashPaymentHandler = async () => {
    try {
      const result = await Axios.post(config?.baseUrl + "api/bkash/create");
      console.log(
        "🚀 ~ file: page.tsx:8 ~ bkashPaymentHandler ~ result:",
        result
      );

      if (result?.data?.status) {
        window.location.href = result?.data?.data?.data?.bkashURL;
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <button
        className="bg-blue-500 text-white px-3 py-2 rounded-md"
        onClick={bkashPaymentHandler}
      >
        Pay With Bkash
      </button>
    </div>
  );
}
