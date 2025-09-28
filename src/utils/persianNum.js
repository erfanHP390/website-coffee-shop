export const toPersianDigits = (str) => {
  return str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

export function toPersianNumDigits(num) {
  if (!num) return "۰";
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

const services = [
  {
    id: "1",
    title: "تماس از شما ، رساندن از ما!",
    img: "/images/service-1.jpg",
    desc: "با تنها یک تماس، سفارش یک فنجان قهوه‌ی خاص را به سرعت ثبت کنید و لحظات تازه و شادی را تجربه کنید",
    icon: "faTruck",
  },
  {
    id: "2",
    title: "دانه های قهوه تازه",
    img: "/images/service-2.jpg",
    desc: "تذوق لحظه‌ی منحصر به فردی را تجربه کنید با دانه های قهوه‌ی تازه و بی‌نظیر ما!",
    icon: "faCoffee",
  },
  {
    id: "3",
    title: "رزرو آنلاین",
    img: "/images/service-3.jpg",
    desc: "با رزرو سریع ، آنلاین ، ساده خاطرات خود را  ماندگار کنید.",
    icon: "faTable",
  },
  {
    id: "4",
    title: "بهترین در کیفیت",
    img: "/images/service-4.jpg",
    desc: "به دنیایی از عطر و طعم‌های خوش بو و لذت بخش خوش آمدید، جایی که قهوه‌ی تازه و با کیفیت در انتظار شماست",
    icon: "faAward",
  },
];

export { services }