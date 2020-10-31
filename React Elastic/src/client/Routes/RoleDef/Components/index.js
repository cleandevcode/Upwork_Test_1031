import * as React from 'react';

import { ThemeContext } from '../../../Context';
import RoleListComponent from './RoleList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ServiceReducer from '../../../Store/reducers/serviceReducer';
import { getData } from '../../../Store/actions/serviceAction';
/**
 * Root component which calls the list component to show the existing role list
 * Then list component calls different other components like create, members, etc
 * @extends React.Component
 */
class RoleDefComponent extends React.Component {
  /**
   * Render the component to the DOM
   * @returns {}
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let role = '';
    let deleted = false;
    this.props.onGetData(role, deleted);
  }

  // // UNSAFE_componentWillReceiveProps(nextProps) {

  // }

  handleGetData(role, deleted) {
    this.props.onGetData(role, deleted);
  }

  render() {
    const { loading, data } = this.props;
    console.log('data->', data);
    if (loading) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <ThemeContext.Consumer>
            {theme => (
              <RoleListComponent
                theme={theme}
                onChange={this.handleGetData.bind(this)}
                roleDefs={data && data.length > 0 && data}
              />
            )}
          </ThemeContext.Consumer>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  data: state.ServiceReducer.data,
  loading: state.ServiceReducer.loading
});

const mapDispatchToProps = dispatch => ({
  onGetData: (role, deleted) => dispatch(getData(role, deleted))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);
