const ENV = {
  EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
  EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GA_ID || "",
  IS_PROD: process.env.NODE_ENV === "production",
};

export default ENV;
