import PropTypes from 'prop-types';
import './ContactList.module.css';

export const ContactList = ({find, deleteContact }) => (
<ul>
    {find.map(({id, name, number}) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
           Delete
         </button>
        </li>
      );
    })}
        </ul> 
);


ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  find: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
     }),
  )
};
