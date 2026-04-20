"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonComponent from "@/app/ui/Button";
import Container from "@/app/components/Container";
import { Dialog } from "primereact/dialog";

type FormState = {
  name: string;
  family: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

type FocusState = {
  [key: string]: boolean;
};

const ContactUs = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    family: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [isFocused, setIsFocused] = useState<FocusState>({
    name: false,
    family: false,
    email: false,
    phone: false,
    message: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<FormState>>({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (showModal && successMessage) {
      const timer = setTimeout(() => {
        setShowModal(false);
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal, successMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused({ ...isFocused, [e.target.id]: true });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!form[e.target.id as keyof FormState]) {
      setIsFocused({ ...isFocused, [e.target.id]: false });
    }
  };

  const handleRadioChange = (option: string) => {
    setForm({ ...form, topic: option });
  };

  const topics = ["طراحی سایت", "سئو", "تولید محتوا", "گوگل ادز"];

  const shouldLabelFloat = (id: string) => {
    return form[id as keyof FormState] || isFocused[id];
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormState> = {};

    if (!form.name.trim()) errors.name = "نام را وارد کنید.";
    if (!form.email.trim()) {
      errors.email = "ایمیل را وارد کنید.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "ایمیل نامعتبر است";
    }
    if (!form.message.trim()) errors.message = "پیام را وارد کنید.";
    if (form.phone && !/^[0-9]{10,11}$/.test(form.phone)) {
      errors.phone = "شماره تماس نامعتبر";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await axios.post("/api/contact", form);

      setForm({
        name: "",
        family: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
      setIsFocused({
        name: false,
        family: false,
        email: false,
        phone: false,
        message: false,
      });

      setSuccessMessage("پیام شما با موفقیت ارسال شد!");
      setShowModal(true);
    } catch (error) {
      setSuccessMessage("خطا در ارسال پیام!");
      setShowModal(true);
      console.error("Error submitting the form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white w-full">
      <Container classNames="py-[100px]">
        <form
          className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl"
          onSubmit={handleSubmit}
        >
          {/* ردیف اول: نام و نام خانوادگی */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 ">
            <div className="relative w-full md:w-1/2">
              <input
                id="name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`peer w-full rounded-[12px] border ${
                  formErrors.name ? "border-red-500" : "border-[#E0E0E0]"
                } bg-[#EEE] px-3 pt-8 pb-3 text-xs text-black focus:outline-none focus:border-blue-500`}
              />
              <label
                htmlFor="name"
                className={`absolute right-3 text-xs transition-all duration-200 ${
                  shouldLabelFloat("name")
                    ? "top-2 text-[12px] text-blue-500"
                    : "top-6 text-[14px] text-black"
                }`}
              >
                نام
              </label>
              {formErrors.name && (
                <p className="text-red-600 text-xs mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className="relative w-full md:w-1/2">
              <input
                id="family"
                value={form.family}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`peer w-full rounded-[12px] border ${
                  formErrors.family ? "border-red-500" : "border-[#E0E0E0]"
                } bg-[#EEE] px-3 pt-8 pb-3 text-xs text-black focus:outline-none focus:border-blue-500`}
              />
              <label
                htmlFor="family"
                className={`absolute right-3 text-xs transition-all duration-200 ${
                  shouldLabelFloat("family")
                    ? "top-2 text-[12px] text-blue-500"
                    : "top-6 text-[14px] text-black"
                }`}
              >
                نام خانوادگی
              </label>
              {formErrors.family && (
                <p className="text-red-600 text-xs mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formErrors.family}
                </p>
              )}
            </div>
          </div>

          {/* ردیف دوم: ایمیل و شماره تماس */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative w-full md:w-1/2">
              <input
                id="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`peer w-full rounded-[12px] border ${
                  formErrors.email ? "border-red-500" : "border-[#E0E0E0]"
                } bg-[#EEE] px-3 pt-8 pb-3 text-xs text-black focus:outline-none focus:border-blue-500`}
              />
              <label
                htmlFor="email"
                className={`absolute right-3 text-xs transition-all duration-200 ${
                  shouldLabelFloat("email")
                    ? "top-2 text-[12px] text-blue-500"
                    : "top-6 text-[14px] text-black"
                }`}
              >
                ایمیل
              </label>
              {formErrors.email && (
                <p className="text-red-600 text-xs mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formErrors.email}
                </p>
              )}
            </div>

            <div className="relative w-full md:w-1/2">
              <input
                id="phone"
                value={form.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`peer w-full rounded-[12px] border ${
                  formErrors.phone ? "border-red-500" : "border-[#E0E0E0]"
                } bg-[#EEE] px-3 pt-8 pb-3 text-xs text-black focus:outline-none focus:border-blue-500`}
              />
              <label
                htmlFor="phone"
                className={`absolute right-3 text-xs transition-all duration-200 ${
                  shouldLabelFloat("phone")
                    ? "top-2 text-[12px] text-blue-500"
                    : "top-6 text-[14px] text-black"
                }`}
              >
                شماره تماس
              </label>
              {formErrors.phone && (
                <p className="text-red-600 text-xs mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          {/* بخش موضوع */}
          <div className="flex flex-col gap-3.5 mb-12">
            <span className="text-[#011C2A] text-sm font-semibold">
              در چه زمینه‌ای می‌تونیم به شما کمک کنیم؟
            </span>
            <div className="flex flex-wrap gap-y-4 gap-x-[18px]">
              {topics.map((option) => (
                <div
                  key={option}
                  onClick={() => handleRadioChange(option)}
                  className="flex items-center cursor-pointer select-none"
                >
                  <div
                    className={`w-5 h-5 rounded-full transition-all duration-200 flex items-center justify-center ${
                      form.topic === option ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    {form.topic === option && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs mr-3 text-black">{option}</span>
                </div>
              ))}
            </div>
            {formErrors.topic && (
              <p className="text-red-600 text-xs">{formErrors.topic}</p>
            )}
          </div>

          {/* فیلد پیام */}
          <div className="relative w-full mb-12">
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ width: "100%", height: "140px" }}
              className={`peer rounded-[12px] border ${
                formErrors.message ? "border-red-500" : "border-[#E0E0E0]"
              } bg-[#EEE] px-3 pt-8 pb-3 text-xs text-black focus:outline-none focus:border-blue-500`}
            />
            <label
              htmlFor="message"
              className={`absolute right-3 text-xs transition-all duration-200 ${
                shouldLabelFloat("message")
                  ? "top-2 text-[12px] text-blue-500"
                  : "top-6 text-[14px] text-black"
              }`}
            >
              توضیحات
            </label>
            {formErrors.message && (
              <p className="text-red-600 text-xs mt-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {formErrors.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <ButtonComponent
              label={isSubmitting ? "در حال ارسال..." : "ارسال"}
              type="submit"
              color="consultation"
              disabled={isSubmitting}
            />
          </div>
        </form>

        <Dialog
          visible={showModal}
          onHide={() => setShowModal(false)}
          header={successMessage.includes("موفقیت") ? "موفقیت" : "خطا"}
          dismissableMask={!successMessage.includes("موفقیت")}
          className="min-w-[300px]"
        >
          <div className="flex items-center gap-3">
            {successMessage.includes("موفقیت") ? (
              <>
                <i className="pi pi-check-circle text-green-500 text-2xl"></i>
                <p className="text-green-500">{successMessage}</p>
              </>
            ) : (
              <>
                <i className="pi pi-times-circle text-red-500 text-2xl"></i>
                <p className="text-red-500">{successMessage}</p>
              </>
            )}
          </div>
        </Dialog>
      </Container>
    </div>
  );
};

export default ContactUs;
