import React, { useState } from 'react';
import Avatar from '../common/Avatar';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { FaEllipsisV, FaRegStar, FaStar } from 'react-icons/fa';

const Card = ({ name, designation = 'Administartor', email, phone, star,onlineStatus,imgUrl }) => {
	const [ starred, setStarred ] = useState(star);
	return (
		<div className="card">
			<div className="card-action">
				<FaEllipsisV className="elipses-icon" />
				{starred ? (
					<FaStar className="star-icon" onClick={() => setStarred(false)} />
				) : (
					<FaRegStar className="star-icon" onClick={() => setStarred(true)} />
				)}
			</div>
			<Avatar style={{ marginTop: -8 }} src={imgUrl} showStatus={onlineStatus === 1 ? "available": onlineStatus === 0 ? "loggedOut" : "away"} />
			<div className="card-heading">
				<h3 className="">{name}</h3>
				<p>{designation}</p>
			</div>
			<div className="card-body">
				<div className="icon-value">
					<AiOutlineMail />
					<p>{email}</p>
				</div>
				<div className="icon-value">
					<FiPhone />
					<p>{phone}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
