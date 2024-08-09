import React, { Component } from 'react'

export default class LifeCycleClassChild extends Component {
    componentDidMount() {
        console.log('컴포넌트 마운트!');
    }

    componentDidUpdate(){
        console.log('component update!');
    }

    componentWillUnmount(){
        console.log('꿰꼬닭');
    }
    
  render() {
    return (
        <div>자식 컴포넌트
            <p>현재 Number 값은 {this.props.number} 입니다</p>
        </div>
    )
  }
}
