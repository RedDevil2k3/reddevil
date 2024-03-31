import './form-input.styles.scss';

const FormInput = ({label, ...otherProps }, changeHandler, value) => {
    return (
        <div className="group">
        <input className="form-input" {...otherProps}/>
        {label &&(
            <label 
            className={`${
                otherProps.value.length ? 'shirnk' : '' 
            } form-input-label`}
            >
            {label}
            </label>)}
        </div>
    );
};

export default FormInput;