import { FocusCards } from "@/components/ui/focus-cards";
export function FocusCardsDemo() {
  const cards = [
    {
      title: "学部・大学院等",
      src: "/rigaku.jpg",
      link:"/academics",
    },
    {
      title: "受験生に向けて",
      src: "/forstudents.jpg",
      link:"/examinee",
    },
    {
      title: "入学案内",
      src: "/enter.jpg",
      link:"/welcome",
    },
    {
      title: "教育・学生生活",
      src: "/education.jpg",
      link:"/living",
    },
    {
      title: "研究活動",
      src: "/labo.jpg",
      link:"/home",
    },
    {
      title: "連携活動",
      src: "/oversea.jpg",
      link:"/home",
    },
  ];

  return <FocusCards cards={cards} />;
}

