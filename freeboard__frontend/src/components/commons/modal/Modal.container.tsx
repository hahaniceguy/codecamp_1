import React from 'react';
import Slide from '@material-ui/core/Slide';
import ModalUI from './Modal.presenter';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     props : TransitionProps & {children?: React.ReactElement<>}
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function Modal({handleClose, open}) {
  return (
    <ModalUI
      // Transition={Transition}
      handleClose={handleClose}
      // open={open}
    />
  );
}
