import React from "react";
import { useState } from "react";
import {
  StyledQuery,
  StyledChoice,
  StyledMore,
  StyledOutput,
  StyledDesc,
  StyledClose,
} from "../styled components/styledQuery";

export default function Desc(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledQuery>
      <StyledChoice>{props.choice}</StyledChoice>
      {props.noDesc ? null : (
        <StyledMore onClick={handleOpen} opacity={open ? 0 : 1} />
      )}
      {open ? (
        <StyledClose onClick={handleClose} opacity={open ? 1 : 0} />
      ) : null}
      <StyledOutput>{props.output}</StyledOutput>
      {open ? <StyledDesc>{props.desc}</StyledDesc> : null}
    </StyledQuery>
  );
}
