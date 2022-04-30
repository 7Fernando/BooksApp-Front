import axios from "axios";
import { useRef } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, useDisclosure,  AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay, } from "@chakra-ui/react";

const UpdateSub = ({ userPlan, res, setRes }) => {
  const id = userPlan === "LOVER" ? 2 : 3;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
const namePlan = id === 2 ? "GROWTH" : "LOVER"
  const updatingSub = async () => {
    const email = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const autorizacion = {
      headers: { authorization: `Bearer ${token}`, userMail: email },
    };
    console.log("userPlan", email);
    const url = "http://localhost:3001/api/sub/changeSubscription";
    setRes(true);
    const changePlan = await axios.put(
      url,
      {
        usermail: email,
        idPlanPrice: id,
      },
      autorizacion
    );
    console.log("changePlan", changePlan);
    if (changePlan.data.GoodChange) {
      const update = await axios.put(
        "http://localhost:3001/api/sub",
        {
          email: email,
          idPlan: id,
        },
        autorizacion
      );
      setRes(false);
    }
    setRes(false);
  };
  return (
    <>
      <Box mt="5">
        <Box mb="3">
          <Button
            w="100%"
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            fontSize={"sm"}
            bg={"green.400"}
            color="white"
            onClick={onOpen}
          >
            <RepeatIcon m={2} />
            Change plan
          </Button>


          <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Change plan subscription
            </AlertDialogHeader>

            <AlertDialogBody fontWeight={"bold"} color="gray.500">
            At the moment there are only two plans. 
            You will change to the {namePlan} plan and on your next bill you will see the change in price reflected.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} >
                Cancel
              </Button>
              <Button colorScheme='green' onClick={()=>{updatingSub();onClose()}} ml={3}>
                Confirm Change
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
   


        </Box>
        <Box mt={5}>
          <Button
            w="100%"
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            fontSize={"sm"}
          >
            Cancel subscription
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default UpdateSub;
