import React, { useMemo } from 'react';
import ReactModal from 'react-modal';

interface IModal extends ReactModal.Props {
  children?: React.ReactNode | React.ReactChild;
}
ReactModal.setAppElement('#__next');
export const Modal = ({
  children,
  style,
  ...props
}: IModal) => {
    const customStyles = useMemo(()=> style || {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex                : '9999999',
      },
      content : {
        right                 : 'auto',
        bottom                : 'auto',
        padding               : '0',
        backgroundColor       : 'transparent',
        borderColor           : 'transparent',
        borderRadius          : '0',
        zIndex                : '9999999',
        height                : "100%",
        width                : "100%",
        top: '0',
        left: '0'
      }
    },[style]);
    return (
        <ReactModal
            // @ts-ignore
            style={customStyles || style}
            closeTimeoutMS={200}
            {...props}
            >
            {children}
        </ReactModal>
    );
};