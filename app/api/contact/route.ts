import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// تابع برای دریافت آیکون مربوط به هر فیلد
function getIconForField(field: string): string {
  const icons: { [key: string]: string } = {
    name: "👤",
    email: "📧",
    phone: "📱",
    topic: "🏷️",
    message: "💬",
  };
  return icons[field] || "📄";
}

// تابع برای دریافت برچسب (label) مربوط به هر فیلد
function getLabelForField(field: string): string {
  const labels: { [key: string]: string } = {
    name: "نام ",
    family: "نام خانوادگی",
    email: "آدرس ایمیل",
    phone: "شماره تماس",
    topic: "موضوع",
    message: "پیام",
  };
  return labels[field] || field;
}

export async function POST(req: Request) {
  try {
    // اضافه کردن هدرهای CORS برای preflight requests (OPTIONS)
    if (req.method === "OPTIONS") {
      const preflightRes = NextResponse.json({});
      preflightRes.headers.set("Access-Control-Allow-Origin", "https://webnitrogen.ir"); // دامنه مجاز
      preflightRes.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // روش‌های مجاز
      preflightRes.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization"); // هدرهای مجاز
      return preflightRes;
    }

    // اگر درخواست POST است، ادامه دهید
    const res = NextResponse.json({ message: "ایمیل با موفقیت ارسال شد" });

    // تنظیم هدرهای CORS برای درخواست‌های موفقیت‌آمیز
    res.headers.set("Access-Control-Allow-Origin", "https://webnitrogen.ir"); // دامنه مجاز
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // روش‌های مجاز
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization"); // هدرهای مجاز

    // گرفتن بدنه درخواست
    const body = await req.json();

    // اعتبارسنجی ورودی‌ها
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "نام، ایمیل و پیام الزامی هستند" },
        { status: 400 }
      );
    }

    // اعتبارسنجی ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "فرمت ایمیل نامعتبر است" },
        { status: 400 }
      );
    }

    // محتوای ایمیل
    const emailHtml = `
    <div style="font-family: Tahoma, Arial, sans-serif; direction: rtl; max-width: 600px; margin: auto; background-color: #f5f5f5; padding: 20px;">
      <div style="background-color: #2a4365; padding: 20px; border-radius: 5px 5px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0;">پیام جدید از نیتروژن</h1>
      </div>
      
      <div style="background-color: #fff; padding: 30px 20px; border-radius: 0 0 5px 5px;">
        ${Object.entries(body)
          .filter(([, value]) => value)
          .map(
            ([key, value]) => `
            <div style="display: flex; align-items: center; margin: 15px 0; padding: 10px; background-color: #f8f9fa; border-radius: 8px;">
              <div style="background-color: #e2e8f0; padding: 8px; border-radius: 6px; margin-left: 10px;">
                ${getIconForField(key)}
              </div>
              <div>
                <div style="color: #4a5568; font-size: 14px; font-weight: 500;">${getLabelForField(key)}</div>
                <div style="color: #2d3748; font-size: 16px; margin-top: 5px; ${
                  key === "message"
                    ? "white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word;"
                    : ""
                }">${value}</div>
              </div>
            </div>
          `
          )
          .join("")}
      </div>

      <div style="margin-top: 20px; text-align: center; color: #718096; font-size: 12px;">
        <p>این ایمیل از طریق فرم تماس وبسایت ارسال شده است</p>
        <p>© ${new Date().getFullYear()} Nitrogen. All rights reserved</p>
      </div>
    </div>
    `;

    // ارسال ایمیل با استفاده از Resend
    const { error } = await resend.emails.send({
      from: "وبسایت نیتروژن <onboarding@resend.dev>",
      to: "am.maghani@gmail.com",
      subject: body.topic ? `پیام جدید: ${body.topic}` : "پیام جدید بدون موضوع",
      html: emailHtml,
    });

    // بررسی ارور در ارسال ایمیل
    if (error) {
      throw new Error(error.message);
    }

    // برگرداندن پاسخ موفقیت‌آمیز
    return res;
  } catch (error) {
    console.error("Email Send Error:", error);

    // پاسخ خطا در صورت بروز مشکل
    const errorRes = NextResponse.json({ error: "خطا در ارسال ایمیل" }, { status: 500 });
    errorRes.headers.set("Access-Control-Allow-Origin", "*"); // هدر CORS برای درخواست خطا
    return errorRes;
  }
}
