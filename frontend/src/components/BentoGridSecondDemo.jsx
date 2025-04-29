import React from "react";
import { BentoGrid , BentoGridItem } from "./BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import obj from "../../data";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          navi = {item.navigate} />
          
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-center bg-cover" style={{backgroundImage : `url(${obj.dashboard_ss})`}}></div>
);
const items = [
  {
    title: "View your previous predictions",
    description: "Have a view of your previous predictions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    navigate : "landing",
  },
  {
    title: "Get AI based insights for your prompts",
    description: "Understand ongoing trends in your industry",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    navigate : "landing",
  },
  {
    
    title: "Upload file for new dashboard",
    description: "get insights on recent data",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    navigate : "uploadfile",
  },
  {
    title: "Downlaod your dashboard",
    description:
      "download your dashboard with one click ",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    navigate : "landing",
  },
];
