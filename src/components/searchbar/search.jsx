import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Search2Icon } from "@chakra-ui/icons";
import { searchBooks } from "../../redux/actions/books";
import { Flex, IconButton, Button, Input, InputGroup } from "@chakra-ui/react";
import s from "../filter/filter_athors.module.css"


const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBooks(search));
    setSearch("");
  };

  return (
    <div>

      <Flex p="2">
        <InputGroup justifyContent="center">
          <Input
         borderRightRadius="0"
            color="green.200"
            bg="gray.700"
            variant="filled"
            size="md"
            width="md"
            list="books"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search Books..."
          />

          <IconButton
            bg="green.500"
            color="white"
            borderLeftRadius="0"
            ml="-md"
            _hover={{
              color: "gray.800",
            }}
            size="md"
            onClick={onSubmit}
            icon={<Search2Icon/>}
          />

        </InputGroup>
      </Flex>
    </div>

    
    
  );
};

export default Search;
