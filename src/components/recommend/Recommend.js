import React, { Component } from 'react';
import './Recommend.scss';
class Recommend extends Component {
    render() {
        return (
            <div className='recommend-container'>
                <div className='title'>推荐</div>
                <ul className='app-list'>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <li className='app-item' key={index}>
                                    <img className='app-icon' src={item['im:image'][0].label} alt="" />
                                    <div className='app-name'>{item['im:name'].label}</div>
                                    <div className='app-categray'>{item.category.attributes.label}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Recommend;