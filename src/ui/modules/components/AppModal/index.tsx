import { Dialog, Slide } from "@mui/material";
import React, { forwardRef, ReactElement, Ref } from "react";
import { TransitionProps } from "@mui/material/transitions";

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface AppModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactElement;
  label: string;
}

export const AppModal: React.FC<AppModalProps> = ({ open, setOpen, label, children }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby={label}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          borderRadius: "20px",
        },
      }}
    >
      {children}
    </Dialog>
  );
};
