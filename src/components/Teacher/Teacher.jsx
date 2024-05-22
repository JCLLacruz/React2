import { useEffect, useState } from 'react';
import './Teacher.css';

const Teacher = (props) => {
	const teachers = [{ name: 'Juanito' }, { name: 'Pepito' }, { name: 'Yolanda' }, { name: 'Sofia' },{ name: 'Agustín' }];

	const [name, setName] = useState('Sofia');

	return (
		<div id='teacherDiv'>
			<h1> Teacher name: <span className='first'>{name}</span></h1>
			<ul>
				{teachers.map((teacher, i) => (
					<li onClick={() => setName(teacher.name)} key={i}>
						{teacher.name}
					</li>
				))}
			</ul>
				<input id='inputName' type='text' onChange={(e) => {setName(e.target.value)}}/>
		</div>
	);
};

export default Teacher;
