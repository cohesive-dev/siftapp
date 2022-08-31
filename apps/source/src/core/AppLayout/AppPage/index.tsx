import _ from 'lodash';
import withData from './withData';
import withLayout from './withLayout';

export default _.flow(withData, withLayout);
