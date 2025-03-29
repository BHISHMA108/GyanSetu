import React from 'react';
import Drawer from '@mui/material/Drawer';
import Calendar from './Calendar';

function CalendarDrawer({ open, onClose }) {
  return (
<Drawer
  anchor="left"
  open={open}
  onClose={onClose}
  transitionDuration={{ enter: 500, exit: 300 }} // Smooth animation
>
  <Calendar />
</Drawer>

  );
}

export default CalendarDrawer;
