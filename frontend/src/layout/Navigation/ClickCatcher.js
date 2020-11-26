import React from "react";

import { StyledClickCatcher } from "root/css";

export default function ClickCatcher({ open, close }) {
    if (!open) return null
    return <StyledClickCatcher onClick={close} />
}