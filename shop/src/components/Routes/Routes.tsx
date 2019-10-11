import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as routesActions from '../../actions/routes';
import { RoutesEntitie } from "../../entities/Routes";
import { List, Icon } from "semantic-ui-react";

import './Routes.css'

interface IRoutesProps {
    items: RoutesEntitie[],
    chengeRoute: Function
}

const Routes = (props: IRoutesProps) => (
    <div>
        <List selection verticalAlign='middle' className="RoutesList">
            {props.items.map((item: RoutesEntitie) => (
                <List.Item key={item.id} onClick={() => props.chengeRoute(item.id)}>
                    <Link to={item.path} className="RouteItem">
                        <Icon name={item.icon}/>
                        <List.Content>
                            <List.Header>{item.text}</List.Header>
                        </List.Content>
                    </Link>
                </List.Item>
            ))}
        </List>
    </div>
)


const mapStateToProps = (state: any) => {
    return {...state.items}
}

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(routesActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);