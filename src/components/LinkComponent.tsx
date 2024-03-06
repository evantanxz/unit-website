import { ChevronRight } from "lucide-react";
import * as React from "react";

function LinkComponent({ text, link }: { text: string; link: string }) {
  return (
    <a href={link} className="link-component">
      <span>{text}</span>
      <ChevronRight />
    </a>
  );
}

export default LinkComponent;
