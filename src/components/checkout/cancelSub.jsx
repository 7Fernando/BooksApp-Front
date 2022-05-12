import axios from "axios";
import { useRef } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
const URL = import.meta.env.VITE_BASE_URL;
import {
  Box,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const CancelSub = ({ toast, setRes }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  let navigate = useNavigate();

  const cancelingSub = async () => {
    const email = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const autorizacion = {
      headers: { authorization: `Bearer ${token}`, userMail: email },
    };

    const url = `${URL}/author/sub/cancelSub`;
    setRes(true);
    const cancelSub = await axios.put(
      url,
      {
        usermail: email,
      },
      autorizacion
    );
 
    if (cancelSub.data.GoodCancel) {
      setRes(false);
      toast({
        title: `Canceled Subscription successfully`,
        description: "You can see the changes right now",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
      return navigate("/");
    }
    setRes(false);
  };
  return (
    <>
      <Box mt={5}>
        <Button
          w="100%"
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          fontSize={"sm"}
          onClick={onOpen}
        >
          Cancel subscription
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Cancel subscription
              </AlertDialogHeader>

              <AlertDialogBody fontWeight={"bold"} color="gray.500">
                Are you sure? At the time of canceling a subscription we will
                delete your account immediately and all types of charges will be
                canceled for the next month. If you accept and confirm you will
                no longer have access to the page unless you create a new
                account. Also, there is no refund.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    cancelingSub();
                    onClose();
                  }}
                  ml={3}
                >
                  Confirm delete account & subscription
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </>
  );
};
export default CancelSub;
