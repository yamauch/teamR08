import React, { Component } from 'react';
import TreeDeco from './TreeDeco';
import { firebaseDb } from './firebase';

export default class TreeDecoList extends Component {
    constructor() {
        super();
        this.state = {
            decos: [],
        };
    }
    componentDidMount() {
        firebaseDb
        .ref('decos')
        .on('value', snapshot => this.setState({ decos: snapshot.val() || [] }));
    }
    render() {
        return (
            <ul>
                {Object.entries(this.state.todos).map(([key, value]) => (
                    <TreeDeco key={key} id={key} {...value} />
                ))}
            </ul>
        );
    }
}