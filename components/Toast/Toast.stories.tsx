import type { Meta, StoryFn } from "@storybook/react";
import { useToast } from "@/hooks/useToast";
import Button from "@/components/Button/Button/Button";

export default {
  title: "UI/Toast",
} as Meta;

export const Default: StoryFn = () => {
  const toast = useToast();

  return (
    <Button type="primary" onClick={() => toast.open({ content: "기본 토스트" })}>
      Open toast
    </Button>
  );
};

export const Type = () => {
  const toast = useToast();

  return (
    <Button type="primary" onClick={() => toast.open({ type: "alert", content: "경고" })}>
      Open alert toast
    </Button>
  );
};

export const Position = () => {
  const toast = useToast();

  return (
    <div style={{ display: "flex", gap: "6px" }}>
      <Button type="primary" onClick={() => toast.open({ position: "top", content: "상단" })}>
        Open top toast
      </Button>
      <Button type="primary" onClick={() => toast.open({ position: "bottom", content: "하단" })}>
        Open bottom toast
      </Button>
    </div>
  );
};
