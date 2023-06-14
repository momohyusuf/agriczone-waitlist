import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import { agriczoneObjectiveData } from '@/utils/data';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          Close
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function FindOutMoreModal(props: any) {
  const handleClose = () => {
    props.setOpenFindOutMore(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.openFindOutMore}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          What We Are About
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {
            <div>
              <h2 className="text-2xl bg--glass p-4 rounded-md mb-4 ">
                Curious to know what Agric Zone is all about?
              </h2>

              <div className="bg--glass rounded-md">
                <ul className="marker:text-green-500 marker:text-2xl list-outside my-4 p-4 mx-6 list-disc ">
                  {agriczoneObjectiveData.map((item) => (
                    <li className=" mb-4" key={item.id}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
