import React, { FC, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classnames from 'classnames';

import { CloseIcon } from '@components/Common/icons';

type DrawerProps = {
  open: boolean;
  isFullWidth?: boolean;
  width?: number;
  handleClose?: () => void;
  hideCloseButton?: boolean;
  children: React.ReactNode;
};

export const Drawer: FC<DrawerProps> = ({
  open = false,
  width = 250,
  isFullWidth = false,
  handleClose,
  hideCloseButton,
  children,
}) => {
  const drawerRef = useRef(null);
  const handleDrawerClose = () => {
    handleClose();
  };

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.removeAttribute('class');
  }, [open]);

  return (
    <AnimatePresence>
      {Boolean(open) && (
        <motion.div
          initial={{ left: '100%' }}
          animate={{ left: 0 }}
          exit={{ left: '100%' }}
          transition={{ default: { ease: 'linear' } }}
          className={classnames('fixed top-0 w-screen h-screen z-50', 'bg-white')}
        >
          <div
            ref={drawerRef}
            style={{ width: isFullWidth ? '100%' : width }}
            className="drawer inline-block h-full overflow-auto"
          >
            {children}
            {!hideCloseButton && (
              <CloseIcon
                className="absolute top-6 right-6 text-white hover:text-black cursor-pointer transition-all duration-500"
                size={40}
                onClick={handleDrawerClose}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
