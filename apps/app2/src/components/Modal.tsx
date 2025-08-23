import { ReactNode } from "react";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  title: ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  children?: ReactNode;
}

export default function Modal({
  open,
  title,
  onClose,
  onConfirm,
  children,
}: ModalProps) {
  if (!open) return <></>;

  return (
    <div className="modal-container fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-dimmed absolute w-full h-full bg-gray-900 opacity-50"
        onClick={() => onClose()}
        role="presentation"
      />
      <div className="modal-contents bg-white z-50 px-6 py-6">
        <div className="modal-title px-2 py-4">{title}</div>
        <div className="modal-body border py-4 px-2">{children}</div>
        <div className="modal-footter flex justify-end mt-4">
          <Button buttonType="cancel" onClick={() => console.log("hi")}>
            닫기
          </Button>
          <Button onClick={() => onConfirm && onConfirm()}>확인</Button>
        </div>
      </div>
    </div>
  );
}
