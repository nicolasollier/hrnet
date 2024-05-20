import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/InputForm.module.css';

const InputForm = ({ name, type = 'text', placeholder, value, onChange, isSelect = false, data = [], isDatePicker = false }) => {
  const containerStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.2rem',
    alignItems: 'flex-start',
  };

  const parseName = (name) => {
    let words = name.split('_');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  };

  return (
    <div style={containerStyles}>
      <label htmlFor={name}>{parseName(name)}</label>
      {isSelect ? (
        <select className={styles.inputStyles} name={name} id={name} value={value} onChange={onChange}>
          {data.map((el, index) => (
            <option key={index} value={el.abbreviation || el.name}>{el.name}</option>
          ))}
        </select>
      ) : isDatePicker ? (
        <DatePicker
          className={styles.inputStyles}
          id={name}
          name={name}
          selected={value}
          onChange={onChange}
          dateFormat="MM/dd/yyyy"
          calendarClassName={styles.datePickerCalendar}
        />
      ) : (
        <input
          className={styles.inputStyles}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func.isRequired,
  isSelect: PropTypes.bool,
  data: PropTypes.array,
  isDatePicker: PropTypes.bool
};

export default InputForm;
