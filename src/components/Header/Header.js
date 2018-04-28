import React , {Component} from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {
   static propTypes={
        value:      PropTypes.string.isRequired,
        onChange:   PropTypes.func.isRequired
    }
    render() {
        return (
            <div>Search: <input type="text" value={this.props.value} onChange={this.props.onChange} /></div>
        );
    }
};

export default Header;
