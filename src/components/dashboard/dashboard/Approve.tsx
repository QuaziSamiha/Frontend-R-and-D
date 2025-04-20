import React from "react";

interface IProps {
  setApproveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Approve = ({ setApproveModalOpen }: IProps) => {
  console.log(setApproveModalOpen);
  return <div>confirm</div>;
};

export default Approve;
