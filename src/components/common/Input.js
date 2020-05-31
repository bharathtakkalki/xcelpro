import React from 'react';
import { FaRegSmile, FaRegFrown } from 'react-icons/fa';

const Input = ({
	formField,
	happy,
	error,
	className,
	inputClassName,
	placeholder,
	value,
	onChange = () => {},
	type = 'text',
	style
}) => {
	return (
		<div style={style} className={`input ${className ? className : ''}`}>
			{formField && (
				<div className="key-container">
					<label className="key">
						{formField}
						{error ? <label className="error-message">({error})</label> : ''}
					</label>
					{happy ? <FaRegSmile className="happy-icon" /> : <FaRegFrown className="frown-icon" />}
				</div>
			)}
			<input
				type={type}
				className={`input-field ${inputClassName ? inputClassName : ''}`}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
};

export default Input;
