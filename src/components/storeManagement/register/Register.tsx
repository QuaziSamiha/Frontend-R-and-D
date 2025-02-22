"use client";

import { useState } from "react";
import NewRegistration from "./newRegistration/NewRegistration";

const Register = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {open ? (
        // =========== NEW REGISTRATION ==============
        <NewRegistration handleOpen={handleOpen} />
      ) : (
        // ============ TABLE =============
        // <RegisterList handleOpen={handleOpen}/>
        <div>register list</div>
      )}
    </div>
  );
};

export default Register;
