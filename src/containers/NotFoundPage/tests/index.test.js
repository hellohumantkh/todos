import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotFoundPage from '../index';
import messages from '../messages';

configure({ adapter: new Adapter() });

describe('<NotFoundPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<NotFoundPage />);
    console.log(renderedComponent); // eslint-disable-line
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });
});
