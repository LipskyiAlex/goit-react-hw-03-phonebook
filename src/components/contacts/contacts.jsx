import { AiFillDelete } from 'react-icons/ai';
import { FcBusinessContact } from 'react-icons/fc';
import { BsTelephoneOutbound } from 'react-icons/bs';
import {
  List,
  Item,
  EmptyList,
  Contact,
  Number,
  Wrapper,
} from './contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {contacts.map(({ id, contact, number }) => (
          <Item key={id}>
            <Wrapper>
              <FcBusinessContact size={20} />
              <Contact> {contact}</Contact>
            </Wrapper>
            <Wrapper>
              <BsTelephoneOutbound size={20} />
              <Number>{number}</Number>
            </Wrapper>
            <div role="button" aria-label="Delete" onClick={() => onDelete(id)}>
              <AiFillDelete size={20} />
            </div>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Contacts;
