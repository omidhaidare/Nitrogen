"use client";

import { useEffect } from "react";
import { Dialog } from "primereact/dialog";
import ContactUs from "@/app/about-us/ContactUs";
import type { PropsWithChildren } from "react";

type Props = {
  visible: boolean;
  onHide: () => void;
};

const ContactModal = ({ visible, onHide }: PropsWithChildren<Props>) => {
  useEffect(() => {
    const appRoot = document.getElementById("__next"); // برای پروژه Next.js

    if (visible) {
      document.body.style.overflow = "hidden";
      if (appRoot) appRoot.style.pointerEvents = "none"; // همه چیز غیرفعال
    } else {
      document.body.style.overflow = "auto";
      if (appRoot) appRoot.style.pointerEvents = "auto"; // فعال‌سازی مجدد
    }

    return () => {
      document.body.style.overflow = "auto";
      if (appRoot) appRoot.style.pointerEvents = "auto";
    };
  }, [visible]);

  const dialogStyle = {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    margin: "0",
    borderRadius: "12px",
    boxShadow: "none",
    background: "transparent",
  };

  const overlayStyle = {
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    background: "rgba(0, 0, 0, 0.01)",
  };

  const closeButton = (
    <button
      onClick={onHide}
      className="absolute top-4 right-4 text-white cursor-pointer focus:outline-none z-50"
      style={{ borderRadius: "50%" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );

  return (
    <div style={{ pointerEvents: "auto" }}>
      <Dialog
        visible={visible}
        style={dialogStyle}
        onHide={onHide}
        modal
        className="p-fluid"
        contentStyle={{
          background: "#FFF",
          borderRadius: "12px",
        }}
        headerClassName="hidden"
        showHeader={false}
        closeOnEscape
        dismissableMask
        breakpoints={{ "960px": "100vw", "640px": "100vw" }}
        pt={{
          mask: {
            style: overlayStyle,
          },
          root: {
            className: "flex items-center justify-center",
            style: { pointerEvents: "auto" }, // فقط مودال قابل تعامل
          },
          content: {
            className: "!bg-transparent !shadow-none relative",
            style: { borderRadius: "12px" },
          },
        }}
      >
        <div className="w-full max-w-2xl mx-auto p-4 override-padding relative z-50">
          {closeButton}
          <ContactUs />
        </div>
      </Dialog>
    </div>
  );
};

export default ContactModal;
