// ツリー1個あたりのコンポーネント
import React, { Component } from 'react';

export default class TreeDeco extends Component {
    render() {
        return (
            <li className="treedeco">
                <nav className="panel">
                    <div className="panel-block">
                        <p>{this.props.top}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.middle}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.bottom}</p>
                    </div>
                </nav>
            </li>
        );
    }
}