/**
*
* Header
*
*/

import React from 'react';
import Link from 'next/link'


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { header, nav } = this.props;
    return (
        <div>
            <div className="container text-center">
                <a><img src="https://images.squarespace-cdn.com/content/v1/59e10bbd46c3c467a3c0da3c/1510878818918-42VTP4PPNNPJWH6EJ00W/ke17ZwdGBToddI8pDm48kJJVW1pm4k6J1TsL9L6L8fYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCZ5L1jLnqi3de8qDe6owvGbyqQqBJwJSTFvcbtc_3pEV_ZdUFUTImi6jxqcs-DEF/MVP-04.jpg" alt=""  height="60px;" /></a>
            </div>
            <nav className="navbar navbar-default" >
                <div className="container-fluid" style={{ marginLeft: '25%' }}>
                    <div className="navbar-header">
                        <div className="container">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>                        
                            </button>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav" >
                        {
                            !!nav.metafields && nav.metafields.map((navElement,index) => (
                                <li key={`nav_${index}`}>
                                    { 
                                        !navElement.children && 
                                            <Link href={navElement.value}><a>{navElement.title}</a></Link>
                                    }
                                    
                                    {!!navElement.children && <a className="dropdown-toggle" data-toggle="dropdown" href="#">{navElement.title}<span className="caret"></span></a>}
                                    {!!navElement.children && <ul className="dropdown-menu">
                                        {
                                            navElement.children.map((child, index) => 
                                                <li key={`child_${index}`}>
                                                    <Link href={child.value[0] == '/' ? child.value : '/'+ child.value}><a>{child.title}</a></Link>
                                                </li>
                                            )
                                        }
                                    </ul>}
                            
                                </li>
                            ))

                        }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;
