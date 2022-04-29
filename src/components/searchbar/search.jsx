import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../redux/actions/books";
import { Button, Input, InputGroup} from "@chakra-ui/react";
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
    
      <div className={s.conteiner}>
      <label className={s.label}>
        <Input
           bg={"green.200"}
           _hover={{
             background: "green.300",
           }}
          
          variant="filled"
          size="md"
          list="books"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search Books..."
          _placeholder={{ opacity: 1, color: 'black' }}
          
        />
           </label>
    </div>
    <div className={s.conteiner}>
        <Button
          bg="green.500"
          color="white"
          _hover={{
            color: "gray.800",
          }}
          size="md"
          onClick={onSubmit}
        >
          Search
        </Button>
        </div>
     
        </div>
  );
};

export default Search;