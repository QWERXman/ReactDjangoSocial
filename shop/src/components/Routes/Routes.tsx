import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { RoutesEntitie } from "../../entities/Routes";
import { List, Icon } from "semantic-ui-react";

import './Routes.css'

interface IRoutesProps {
    items: RoutesEntitie[],
    chengeRoute: Function
}

export const Routes = ({ items, chengeRoute }: IRoutesProps) => (
    <div>
        <List selection verticalAlign='middle' className="RoutesList">
            {items.map((item: RoutesEntitie) => (
                <List.Item key={item.id} onClick={() => chengeRoute(item.id)}>
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

