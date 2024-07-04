"use client";
import React, { useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";

function createData(name, email, admin, randomNumber) {
  return { name, email, admin, randomNumber };
}

const rows = [
  createData("Frozen yoghurt", "yoghurt@gmail.com", false, 1123),
  createData("Ice cream sandwich", "sandwich@gmail.com", true, 3345),
  createData("Eclair", "Eclair@gmail.com", false, 4567),
  createData("Cupcake", "Cupcake@gmail.com", false, 1278),
  createData("Gingerbread", "Gingerbread@gmail.com", false, 5956),
];

export default function UsersTable() {
  const modalRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <div className="w-full h-screen flex flex-col justify-between">
        <Header />
        <div className="max-w-[1080px] lg:w-[1080px] h-full mx-auto">
          <TableContainer component={Paper} className="mt-4">
            <Table className="min-w-full">
              <TableHead className="bg-black">
                <TableRow>
                  <TableCell className="px-1 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                    Name
                  </TableCell>
                  <TableCell className="px-1 md:px-6  py-3 text-center text-xs font-medium uppercase tracking-wider text-white">
                    Email
                  </TableCell>
                  <TableCell className="px-1 md:px-6  py-3 text-center text-xs font-medium uppercase tracking-wider text-white">
                    Verified
                  </TableCell>
                  <TableCell className="px-1 md:px-6  py-3 text-center text-xs font-medium uppercase tracking-wider text-white">
                    Verification Code
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.name} className="bg-white text-black">
                    <TableCell className="py-4 px-1 md:px-6 sm:whitespace-nowrap">
                      {row.name}
                    </TableCell>
                    <TableCell className="px-1 md:px-6 py-4 text-center">
                      {row.email}
                    </TableCell>
                    <TableCell className="px-1 md:px-6 py-4 text-center">
                      {row.admin ? <DoneIcon /> : <CloseIcon />}
                    </TableCell>
                    <TableCell className="px-1 md:px-6 py-4 text-center">
                      {row.admin ? (
                        row.randomNumber
                      ) : (
                        <EditNoteIcon
                          onClick={() => modalRef.current.click()}
                          className="cursor-pointer"
                        />
                      )}

                      <div className="items-center justify-center h-auto hidden">
                        <Button onClick={handleOpen} ref={modalRef}>
                          Open modal
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen">
                              <div className="bg-white rounded-lg shadow-xl p-4 max-w-lg w-full">
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  False Varification
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  className="mt-2"
                                >
                                  Click this link to verify your self
                                  <Link href={"/"} className="text-blue-700">
                                    {" "}
                                    Verify
                                  </Link>
                                </Typography>
                                <Button onClick={handleClose} className="mt-4">
                                  Close
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Footer />
      </div>
    </>
  );
}
