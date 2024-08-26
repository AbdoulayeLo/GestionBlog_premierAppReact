import React from 'react';

function Apropos(props) {
    return (
        <div className="card my-5 offset-2 col-md-8">
            <div className="card-header">
                A PROPOS
            </div>
            <div className="card-body">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                        The current button
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">A second item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">A fourth button item
                    </button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button
                        item
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Apropos;