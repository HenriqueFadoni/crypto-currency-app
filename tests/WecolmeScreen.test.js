/* @jest-environment jsdom */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import WelcomeScreen from '../screens/WelcomeScreen';

describe('WelcomeScreen', () => {
    //Simple Unit Testing
    it('Has rendered 2 children', () => {
        const WScreen = renderer.create(<WelcomeScreen />).toJSON();
        expect(WScreen.children.length).toBe(2);
    });

    //Snapshot Testing
    it('Renders a button', () => {
        const tree = renderer.create(<WelcomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});