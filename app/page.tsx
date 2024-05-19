"use client";

import { useState, useEffect } from "react";
import Loader from "../components/Elements/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); // durasi 3 detik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Welcome to my website</h1>
      {/* Konten halaman utama Anda */}
    </div>
  );
}
