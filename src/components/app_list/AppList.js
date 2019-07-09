import React, { Component } from 'react';

import './AppList.scss';
class AppList extends Component {
    render() {
        return (
            <div className='appList-container'>
                <ul className='list'>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li className='list-item' key={index}>
                                    <div className='app-index'>{index+1}</div>
                                    <div className='app-img'>
                                        <img className='app-icon' src={item['im:image'][0].label} alt="" />
                                    </div>
                                    <div className='app-info'>
                                        <div className='app-name'>{item['im:name'].label}</div>
                                        <div className='app-categray'>{item.category.attributes.label}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default AppList;