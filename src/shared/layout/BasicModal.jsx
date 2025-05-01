import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

export const BasicModal = ({ children, openModal, handleCloseModal }) => {
    return (
        <Modal open={openModal} onClose={handleCloseModal}>
            <div style={style} >{children}</div>
        </Modal>
    );
};
