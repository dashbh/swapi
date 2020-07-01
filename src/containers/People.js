import React from 'react';
import { connect } from 'react-redux'
import { fetchPeople } from '../actions';

class People extends React.Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    render() {
        const { people } = this.props;
        return (
            <ul className="people">
                {people.map((item) => {
                    return <li key={item.url}>{item.name}</li>
                })}
            </ul>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        people: state.people
    }
};

const mapDispatchToProps = { fetchPeople };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(People);

