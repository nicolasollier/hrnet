import PropTypes from 'prop-types';

const Input = ({ name, type, placeholder, value, onChange, isSelect = false, data = [] }) => {
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
    if (name.includes('_')) {
      const parsedName = name.split('_')

      return `${parsedName[0].charAt(0).toUpperCase() + parsedName[0].slice(1)} ${parsedName[1].charAt(0).toUpperCase() + parsedName[1].slice(1)}`;
    }

    return name.charAt(0).toUpperCase() + name.slice(1)
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

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isSelect: PropTypes.bool,
  data: PropTypes.array,
}

export default Input;
