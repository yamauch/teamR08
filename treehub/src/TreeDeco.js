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
                        <p>{this.props.firstLeft}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.firstRight}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.secondLeft}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.secondMiddle}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.secondRight}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.bottomLeft}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.bottomMidLeft}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.bottomMidRight}</p>
                    </div>
                    <div className="panel-block">
                        <p>{this.props.bottomRight}</p>
                    </div>
                </nav>
            </li>
        );
    }
}