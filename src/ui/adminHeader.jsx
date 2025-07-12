import { Modal } from "@mui/material";
import React from "react";
import LogOut from "../features/authentication/logOut";
import UpdateForm from "../features/User-Update/updateForm";

export default function AdminHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo on left */}
          <div className="text-xl font-semibold text-blue-600">
            Admin Portal
          </div>

          {/* Right section - Profile, Avatar, Logout */}
          <div className="flex items-center space-x-4">
            <button
              className="rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleOpen}
            >
              Update Profile
            </button>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <UpdateForm />
              </Modal>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
              <div className="h-5 w-5 text-white"></div>
            </div>

            {/* <button
              className="rounded-lg px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              onClick={() => console.log("Logout")}
            >
              Logout
            </button> */}
            <div>
              <LogOut />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
