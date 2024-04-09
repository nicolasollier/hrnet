import PropTypes from 'prop-types';

const InputForm = ({ name, type, placeholder, value, onChange, isSelect = false, data = [] }) => {
  const containerStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.2rem',
    alignItems: 'flex-start',
  };

  const inputStyles = {
    width: '100%',
    fontSize: '1rem',
    padding: '0.4rem',
    marginTop: '0.2rem',
    borderRadius: '4px',
    border: '1px solid #213547',
    backgroundColor: 'transparent',
  }

  const parseName = (name) => {
  let words = name.split('_');
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  
  return words.join(' ');
}


  return (
    <>
      <div style={containerStyles}>
        <label htmlFor={name}>{parseName(name)}</label>
        {isSelect
          ? <select style={inputStyles} name={name} id={name}>
            {data.map((el, i) => (
              <option key={i} value={el.abbreviation && el.name}>{el.name}</option>
            ))}
          </select>
          : <input style={inputStyles} id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        }
      </div>
    </>
  );
}

InputForm.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isSelect: PropTypes.bool,
  data: PropTypes.array,
}

export default InputForm;
