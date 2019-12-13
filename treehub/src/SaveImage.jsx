import React, { Component } from 'react';
import { firebaseDb } from './firebase';

export default class SaveImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: '',
            middle: '',
            bottom: '',
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        firebaseDb.ref('decos').push({
            top: this.state.top,
            middle: this.state.middle,
            bottom: this.state.bottom,
        });
        this.setState({ top: '', middle: '', bottom: '' });
    }

    render() {
        const { top, middle, bottom } = this.state;
        return (
            <div className="container">
                <div className="field">
                    <label className="label">Top</label>
                    <input
                        className="input"
                        value={this.state.top}
                        onChange={e => this.setState({ top: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">Middle</label>
                    <input
                        className="input"
                        value={this.state.middle}
                        onChange={e => this.setState({ middle: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">Bottom</label>
                    <input
                        className="input"
                        value={this.state.bottom}
                        onChange={e => this.setState({ bottom: e.target.value })}
                    />
                </div>

                <div className="control">
                    {top &&
                        middle &&
                            bottom && (
                                <button className="button is-link" onClick={this.onClick}>
                                    Save
                                </button>
                            )}
                </div>
            </div>
        );
    }
}