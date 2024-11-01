"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function ClientButton() {
  return (
    <Button
      size="lg"
      className="bg-green-600 hover:bg-green-700 text-white min-w-[200px]"
      onClick={() =>
        window.open(process.env.NEXT_PUBLIC_APPLICATION_URL || "#", "_blank")
      }
    >
      Apply Now
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
