import axios from "axios";
import { useRef } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
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

const UpdateSub = ({ userPlan, toast, setRes }) => {
  const id = userPlan === "LOVER" ? 2 : 3;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const namePlan = id === 2 ? "GROWTH" : "LOVER";
  const updatingSub = async () => {
    const email = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const autorizacion = {
      headers: { authorization: `Bearer ${token}`, userMail: email },
    };
    
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
      toast({
        title: `Plan changed to ${namePlan}`,
        description: "You can see the changes right now",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
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
            _hover={{ bg: "green.300" }}
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
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Change plan subscription
                </AlertDialogHeader>

                <AlertDialogBody fontWeight={"bold"} color="gray.500">
                  At the moment there are only two plans. You will change to the{" "}
                  {namePlan} plan. On your next bill you will see the change in
                  price reflected.
                </AlertDialogBody>
                <AlertDialogBody as="i" fontWeight={"bold"} color="gray.400">
                  *Also, remember that in the LOVER plan you have free downloads and
                  in the GROWTH plan you will not be able to download the books
                  but you can read them online.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      updatingSub();
                      onClose();
                    }}
                    ml={3}
                  >
                    Confirm Change
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          {/* </Box>
        <Box mt={5}>
          <Button
            w="100%"
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            fontSize={"sm"}
          >
            Cancel subscription
          </Button> */}
        </Box>
      </Box>
    </>
  );
};
export default UpdateSub;
