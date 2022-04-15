import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchBooks } from "../../redux/actions/books";
import { useState } from "react";
import { Input, InputGroup} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
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
        
          variant="filled"
          size="md"
          width="md"
          list="books"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search Books..."
        />
        <Button
          bg="green.500"
          color="white"
          _hover={{
            color: "gray.800",
          }}
          size="md"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </InputGroup>
      {/* <datalist id="books">
        {allBooks.map((book) => (
          <option key={book.id} value={book.title} />
        ))}
      </datalist>
       */}
       </Flex>
    </div>
  );
};

export default Search;