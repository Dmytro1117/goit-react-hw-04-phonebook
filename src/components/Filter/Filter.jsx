import PropTypes from 'prop-types';
import './Filter.module.css';

export const Filter = ({ text, filterInput }) => (
  
    <input
      type="text"
      value={text}
            onChange={filterInput}
            placeholder="Find contacts by name"
    />
  
);


Filter.propTypes = {
  text: PropTypes.string.isRequired,
  filterInput: PropTypes.func.isRequired,
};
