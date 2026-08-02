"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CopyLinkInput({
  value = "https://ui.shadcn.com",
}: {
  value?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset icon state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input
        type="text"
        value={value}
        readOnly
        className="select-all" // Automatically selects text when a user clicks the input
      />
      <Button
        type="button"
        size="icon"
        variant="outline"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy link"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600 transition-all" />
        ) : (
          <Copy className="h-4 w-4 transition-all" />
        )}
      </Button>
    </div>
  );
}
