import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

let startLogin, wrapper;

beforeEach(() => {
	startLogin = jest.fn();
	wrapper = shallow(
		<LoginPage 
			startLogin={startLogin} 
		/>
	);
});




test('should render the LoginPage correctly', () => {
     expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
	wrapper.find('button').prop('onClick')();
	expect(startLogin).toHaveBeenCalled();
});