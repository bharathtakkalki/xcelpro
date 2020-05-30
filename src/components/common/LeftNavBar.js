import React from 'react';
import { GoBrowser, GoCalendar, GoInfo } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { AiOutlineBank } from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';
import logo from '../../logo.svg' 

const LeftNavBar = () => {
	return (
		<div className="left-nav-bar">
			<img className="logo" src={logo} alt="logo" />
			<ul className="list">
				<li className="list-item">
					<GoBrowser className="icon" />
				</li>
				<li className="list-item">
					<FiEdit className="icon" />
				</li>
				<li className="list-item">
					<GoCalendar className="icon"/>
				</li>
				<li className="list-item">
					<FaTemperatureHigh className="icon" />
				</li>
				<li className="list-item">
					<GoInfo className="icon" />
				</li>
				<li className="list-item">
					<AiOutlineBank className="icon" />
				</li>
				<li className="list-item">
					<GiKnifeFork className="icon" />
				</li>
			</ul>
		</div>
	);
};

export default LeftNavBar;